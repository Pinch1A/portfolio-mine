declare module "*.vue" {
  import { value defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
