<template>
  <div
    class="flex p-3 card card-side max-w-96 mx-auto glass rounded-xl group motion-safe:transition-all motion-safe:duration-700"
  >
    <!-- <div
      class="flex my-auto p-3 space-x-4 w-full "
    > -->
    <!-- <div class="flex"> -->
    <figure
      class="w-48 h-48 m-2 rounded-full outline outline-2 outline-offset-2 outline-orange-700 before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-primary before:-z-[1] before:bg-gradient-radial before:shadow-inner before:shadow-gray-800 group-hover:gradient-radial from-primary-focus to-neutral-focus via-primary group-hover:before:scale-[1.3] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center"
    >
      <!-- if height not valid value return long image (kinda cool) -->
      <img
        class="p-1 h-full w-full rounded-full max-w-full bg-primary-focus object-cover z-10 relative m-auto"
        src="../assets/img/luca-portrait.jpg"
        alt="Avatar"
      />
    </figure>
    <!-- </div> -->
    <!-- </div> -->
    <div class="card-body">
      <div class="flex justify-left">
        <header
          class="motion-safe:translate-y-1 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-700"
        >
          <h3
            class="card-title font-semibold text-left text-2xl text-primary mt-2 group-hover:text-accent dark:group-hover:text-accent relative"
          >
            Luca Mastrorilli
          </h3>
          <div class="flex justify-left">
            <ul class="flex space-x-4 text-primary">
              <li
                class="motion-safe:translate-y-20 group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition"
              >
                <a href="#!" aria-label="Visit me on GitHub">
                  <font-awesome-icon icon="fa-solid fa-brands fa-github" />
                </a>
              </li>
              <li
                class="motion-safe:translate-y-20 group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition"
              >
                <a href="#!" class="" aria-label="Visit me on Instagram">
                  <font-awesome-icon icon="fa-solid fa-brands fa-instagram" />
                </a>
              </li>
              <li
                class="motion-safe:translate-y-20 group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition"
              >
                <a href="#!" class="" aria-label="Visit me on Linkedin">
                  <font-awesome-icon icon="fa-solid fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <p
            class="text-left group-hover:text-base-100 dark:group-hover:text-base-100 relative"
          >
            Frontend Engineer
          </p>
        </header>
      </div>
    </div>
  </div>

  <!-- <div
    class="flex text-gray-800 dark:text-gray-400 h-screen sm:max-md:ml-4 ml-0"
  >
    <div class="flex w-1/2 flex-1 p-2 border w-full">
        next section - yellow
      </div> 
  </div> -->
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>
