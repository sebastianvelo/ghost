import GhostClassName from "./className/GhostClassName";
import { MediaRule, MinBreakpoint, Rule } from "./common/stylesheet";
import { Declaration } from "./common/types";
import getUtility from "./common/utility";
import { setColorAliases } from "./config/CustomColors";
import GhostConfig from "./config/GhostConfig";

const initializeConfig = (config: GhostConfig) => {
  if (config.aliases?.colors) {
    setColorAliases(config.aliases.colors);
  }
}

class GhostStyleSheet {
  public element: HTMLStyleElement;
  public sheet: CSSStyleSheet;

  constructor(config: GhostConfig) {
    initializeConfig(config);
    this.element = document.createElement("style");
    this.appendInHead();
    this.sheet = this.element.sheet as CSSStyleSheet;
  }

  public findRule(selector: string): CSSRule | undefined {
    return Array.from(this.sheet.cssRules).find(
      (r) => (r as CSSStyleRule).selectorText === selector
    );
  }

  public addRule(selector: string, declarations: Declaration[]): void {
    const ruleIdx = this.sheet.insertRule(Rule(selector));
    const rule = this.sheet.cssRules.item(ruleIdx) as CSSStyleRule;
    declarations.forEach(([key, value, priority]) => rule.style.setProperty(key, value, priority));
    this.element.innerHTML += `${rule.cssText}\n`;
  }

  public findMediaRuleOrElseInsert(selector: string, min: number): CSSStyleRule {
    const mediaRule = MediaRule(selector, min);
    const finded = Array(this.sheet.cssRules).find((rule) => (rule as unknown as CSSMediaRule).conditionText === MinBreakpoint(min)) as CSSMediaRule | undefined;
    if (finded) {
      finded.insertRule(mediaRule);
      return finded.cssRules[finded.cssRules.length - 1] as CSSStyleRule;
    }
    const ruleIdx = this.sheet.insertRule(mediaRule);
    return (this.sheet.cssRules.item(ruleIdx) as CSSMediaRule).cssRules[0] as CSSStyleRule;
  }

  public addMediaRule(selector: string, declarations: Declaration[], min: number): void {
    const rule = this.findMediaRuleOrElseInsert(selector, min);
    declarations.forEach(([key, value, priority]) =>
      rule.style.setProperty(key, value, priority)
    );
  }

  public addRuleFromClass(className: GhostClassName) {
    const utility = getUtility(className);
    if (!utility.declarations) {
      console.log(`In ${className}: ${utility.prefix} not found`);
      return;
    }

    if (utility.options[1]) {// TODO Arreglar esto
      const min = 700;
      this.addMediaRule(utility.selector, utility.declarations, min);
      return;
    }

    this.addRule(utility.selector, utility.declarations);
  }

  public addRulesWithClasses(classNames: GhostClassName[]) {
    classNames.forEach(this.addRuleFromClass.bind(this));
  }

  private appendInHead(): void {
    document.head.appendChild(this.element);
  }
}

export default GhostStyleSheet;
