declare module "*.vue" {
  import { _, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "vue-code-highlight";
declare module "vue-highlight-code";
