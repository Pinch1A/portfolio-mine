<script setup lang="ts">
import { PropType, computed } from "vue";
import { ExperienceType } from "@/types";

const props = defineProps({
  experience: {
    type: Object as PropType<ExperienceType>,
    required: true,
  },
});

const country = computed(() => {
  if (props.experience.location === "aus") return "Australia";
  if (props.experience.location === "ita") return "Italia";

  throw new Error("Location unknown");
});
</script>

<template>
  <!-- <div class="grid grid-col-2 w-full"> -->
  <div v-highlight>
    <pre class="language-markup">
      <code class="">
        &lt;{{ experience.company.name }}&gt;
          &lt;Role&gt; {{ experience.role }} &lt;/Role&gt;
          &lt;Location&gt; {{ country }} &lt;/Location&gt;
          &lt;Period&gt; {{ experience.startDate }} - {{ experience.endDate || 'Still here' }} &lt;/Period&gt;
          &lt;Stack&gt; {{ JSON.stringify(experience.stack) }}  &lt;/Stack&gt;
          &lt;Skills&gt; {{ JSON.stringify(experience.skills) }} &lt;/Skills&gt;
        &lt;/{{ experience.company.name }}&gt;
      </code>
    </pre>
  </div>
</template>

<style>
div pre[class*="language-"] {
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 10px 10px;
  box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
  @apply flex;
  @apply max-w-[22rem];
  @apply md:max-w-full;
  @apply rounded-lg;
  @apply text-sm;
  @apply whitespace-pre-line;
  @apply pt-5;
  @apply pb-0;
  @apply md:pb-5;
  @apply text-sm;
}

code[class*="language-"] {
  @apply -ml-10;
  @apply md:-ml-14;
}
code[class*="language-"],
pre[class*="language-"] {
  /* color: #ccc; */
  @apply text-warning;
  @apply font-light;
  @apply text-xs;
  background: none;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  /* padding: 1em; */
  margin: -0.5em 0;
  overflow: auto;
}

/* Box Background */
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  /* background: #2d2d2d; */
  @apply bg-neutral-focus;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  /* color: #ccc; */
  @apply text-primary;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  /* color: #e2777a; */
  @apply text-accent;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
</style>
