import IconBase from "Uikit/iconBase";
import BaseButton from "Uikit/baseButton";
import CheckboxEl from "Uikit/checkboxEl";

export function registerUikit(Vue) {
  Vue.component("iconBase", IconBase);
  Vue.component("baseButton", BaseButton);
  Vue.component("checkboxEl", CheckboxEl);
}
