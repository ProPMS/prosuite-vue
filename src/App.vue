<template>
  <div class="fixed z-10 flex flex-col justify-center w-full h-screen p-4 bg-white" v-if="toggle">
    <div class="absolute top-0 right-0 z-10 p-6 mt-4 mr-4 rounded-full shadow-lg" @click="toggle = false">
      <Close />
    </div>
    <a href="#home" class="flex justify-center">
      <button
        class="mb-8 text-2xl font-bold text-transparent md:uppercase bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100"
        @click="toggle = false">Home</button>
    </a>
    <a href="#about" class="flex justify-center">
      <button
        class="mb-8 text-2xl font-bold text-transparent md:uppercase bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100"
        @click="toggle = false">About</button>
    </a>
    <a href="#solutions" class="flex justify-center">
      <button
        class="mb-8 text-2xl font-bold text-transparent md:uppercase bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100"
        @click="toggle = false">Solutions</button>
    </a>
    <a href="#contact" class="flex justify-center">
      <button
        class="mb-8 text-2xl font-bold text-transparent md:uppercase bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100"
        @click="toggle = false">Contact</button>
    </a>
    <a href="#demo" class="flex justify-center">
      <button class="p-2 px-4 font-bold text-white rounded md:uppercase bg-primary-50"
        @click="toggle = false">Request a Demo</button>
    </a>
  </div>
  <header class="flex flex-row items-center w-full px-6 py-8 md:px-28">
    <div class="mr-auto">
      <ApplicationLogo />
    </div>
    <div class="fixed right-0 z-20 px-4 py-6 mr-4 bg-white rounded-full shadow-lg" v-if="isMobile === true"
      @click="toggleBurger">
      <div class="bg-black w-8 h-0.5"></div>
      <div class="bg-black w-8 h-0.5 my-1"></div>
      <div class="bg-black w-8 h-0.5"></div>
    </div>
    <nav class="mr-4 text-gray-900" v-if="isMobile === false">
      <a href="#home">
        <button class="mr-16 font-bold">Home</button>
      </a>
      <a href="#about">
        <button class="mr-16 font-bold">About</button>
      </a>
      <a href="#solutions">
        <button class="mr-16 font-bold">Solutions</button>
      </a>
      <a href="#contact">
        <button class="mr-16 font-bold">Contact</button>
      </a>
      <a href="#demo">
        <button class="px-6 py-3 font-bold text-white rounded bg-primary-50 hover:shadow-lg">Request a
          Demo</button>
      </a>
    </nav>
  </header>
  <section class="flex items-center px-6 md:px-28" id="home">
    <div class="flex flex-col py-24">
      <span class="text-2xl text-primary-50">Welcome to ProSuite</span>
      <h1
        class="mb-6 text-xl font-bold tracking-tight text-transparent leading-extra-loose md:text-9xl bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100">
        Discover <br> the&nbsp;power&nbsp;of Software</h1>
      <span class="mb-6 text-sm font-normal md:text-lg text-secondary-50" data-scroll data-scroll-speed="3"
        data-scroll-repeat>
        Every day, our clients are faced with challenges and opportunities.<br class="hidden sm:block">
        We help them solve their problems by connecting them to<br class="hidden sm:block">
        information technology. We offer solutions that grow,<br class="hidden sm:block">
        empower and help businesses.<br class="hidden sm:block">
      </span>
      <div class="flex">
        <a href="#solutions"
          class="p-3 mr-2 font-bold text-white rounded bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg">Get
          Started</a>
        <a href="#demo" class="px-6 py-3 text-white rounded bg-primary-50 hover:shadow-lg">Request a Demo</a>
      </div>
    </div>
    <div class="hidden md:block max-w-xl shrink">
      <Hero class="w-full h-auto" />
    </div>
  </section>
  <div class="flex-col">
    <header class="flex p-0 mx-auto mb-8 mr-0">
      <div class="w-2 ml-auto mr-2 bg-primary-50 h-1000"></div>
      <h2 class="mr-auto text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100">
        <strong class="font-bold">Why</strong> ProSuite?
      </h2>
    </header>
    <section id="about" class="flex flex-col justify-between gap-4 px-6 py-6 md:flex-row md:px-28">
      <div class="flex flex-col max-w-sm p-4 mr-0 text-center rounded-md md:mb-2">
        <Book class="mx-auto mb-4" />
        <h3 class="mb-4 text-xl font-bold text-secondary-50">Comprehensive <br />Management Suite</h3>
        <p class="p-4 text-base font-normal text-secondary-50">ProSuite is a one-stop solution for enterprise
          operations, offering services from asset tracking to compliance management.</p>
      </div>
      <div class="flex-col max-w-sm p-4 mr-0 text-center rounded-md md:flex md:mb-2">
        <Book class="mx-auto mb-4" />
        <h3 class="mb-4 text-xl font-bold text-secondary-50">User-Friendly <br /> Design</h3>
        <p class="p-4 text-base font-normal text-secondary-50">With its emphasis on user experience and
          easy-to-use tools, ProSuite transforms complex tasks into simple operations.</p>
      </div>
      <div class="flex-col max-w-sm p-4 mr-0 text-center rounded-md md:flex md:mb-2">
        <Book class="mx-auto mb-4" />
        <h3 class="mb-4 text-xl font-bold text-secondary-50">Cloud-Based <br /> Solution</h3>
        <p class="text-base font-normal text-secondary-50">As a flexible, cloud-based suite, ProSuite ensures
          business continuity and scalability, allowing businesses to manage their operations anytime,
          anywhere.</p>
      </div>
    </section>
  </div>
  <div class="flex-col py-20" id="solutions">
    <header class="flex p-0 mb-8 mr-0">
      <div class="w-2 ml-auto mr-2 bg-primary-50 h-1000"></div>
      <h2 class="mr-auto text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100">
        <strong class="font-bold">Our</strong> Solutions
      </h2>
    </header>
    <section class="grid grid-cols-1 px-6 md:grid-cols-3 md:px-28">
      <div class="mx-auto" v-for="(solution, index) in solutions" :key="index">
        <div class="flex flex-col max-w-sm p-4 mt-8 text-left rounded-md sm:mr-0 sm:mb-2 w-full sm:w-96">
          <h3
            class="mb-2 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100">
            {{ solution.title }}</h3>
          <p class="mb-4 text-base font-normal text-secondary-50">{{ solution.subtitle }}</p>
          <a href="#demo"
            class="px-6 py-3 font-bold text-center text-white rounded bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg">Learn
            More
          </a>
        </div>
      </div>
    </section>
  </div>
  <div class="flex-col bg-primary-50" id="contact">
    <section class="flex-row items-center justify-between px-6 py-12 md:flex md:px-28">
      <h2 class="text-4xl font-bold text-white">We'd love to show you how our solution works</h2>
      <a href="#demo"
        class="inline-block p-3 mt-4 mr-2 font-bold text-white rounded bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-md md:mt-0">Request
        a Demo
      </a>
    </section>
  </div>
  <div class="flex-col px-6 py-20 bg-white md:px-28" id="demo">
    <h2 class="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-blue-100">
      Request a Demo</h2>
    <p class="mb-8 text-base text-secondary-50">Tell us about your business and we'll set up a walkthrough of
      ProSuite for your team.</p>
    <form class="flex flex-col max-w-xl gap-4" @submit.prevent="submitDemo">
      <input v-model="demoForm.name" type="text" required placeholder="Your name"
        class="px-4 py-3 border border-gray-300 rounded" />
      <input v-model="demoForm.email" type="email" required placeholder="Work email"
        class="px-4 py-3 border border-gray-300 rounded" />
      <input v-model="demoForm.company" type="text" placeholder="Company"
        class="px-4 py-3 border border-gray-300 rounded" />
      <textarea v-model="demoForm.message" rows="4" placeholder="What would you like to see?"
        class="px-4 py-3 border border-gray-300 rounded"></textarea>
      <button type="submit"
        class="px-6 py-3 font-bold text-white rounded bg-primary-50 hover:shadow-lg">Book my demo</button>
      <p class="text-sm text-secondary-50">Prefer email? Write to us at
        <a class="underline" href="mailto:info@prosuite.co.za">info@prosuite.co.za</a>.
      </p>
    </form>
  </div>
  <div class="flex-col px-6 pt-6 md:px-28 bg-gradient-to-br from-blue-100 to-blue-100">
    <footer class="flex-row justify-between md:flex py-14">
      <div class="flex flex-col mr-4">
        <FooterLogo class="mb-4" />
        <span class="mb-32 text-sm text-white">
          ProSuite is a suite of cloud-based platforms which<br class="hidden sm:block">
          aims at transforming and automating enterprise<br class="hidden sm:block">
          tasks. Our solutions focus on user experience and<br class="hidden sm:block">
          easy-to-use tools including Asset Management, Risk <br class="hidden sm:block">
          Management and Performance Management.
        </span>
        <div class="d-flex">
          <span class="text-sm text-white ">{{ new Date().getFullYear() }} &copy; ProSuite. All rights
            reserved. </span>
          <a class="text-sm text-white underline" href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="text-lg font-bold text-white">Services</h2>
        <span class="text-sm text-white">
          ProSuite Risk
        </span>
        <span class="text-sm text-white">
          ProSuite Docs
        </span>
        <span class="text-sm text-white">
          ProSuite Asset
        </span>
        <span class="text-sm text-white">
          ProSuite Performance
        </span>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="text-lg font-bold text-white">Links</h2>
        <a class="text-sm text-white" href="#home">
          Home
        </a>
        <a class="text-sm text-white" href="#about">
          About
        </a>
        <a class="text-sm text-white" href="#solutions">
          Solutions
        </a>
        <a class="text-sm text-white" href="#contact">
          Contact
        </a>
        <a class="text-sm text-white" href="#demo">
          Request a Demo
        </a>
      </div>
      <div class="flex flex-col">
        <h2 class="mb-4 text-lg font-bold text-white">Contact Us</h2>
        <a class="text-sm text-white underline" href="mailto:info@prosuite.co.za">
          info@prosuite.co.za
        </a>
      </div>
    </footer>
  </div>
</template>

<script>

import ApplicationLogo from './Components/ApplicationLogo.vue'
import Hero from './Components/Hero.vue'
import Book from './Components/Book.vue'
import FooterLogo from './Components/FooterLogo.vue'
import Close from './Components/Close.vue'

export default {
  components: {
    Book,
    Hero,
    ApplicationLogo,
    FooterLogo,
    Close,
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
  data() {
    return {
      toggle: false,
      isMobile: false,
      demoForm: {
        name: '',
        email: '',
        company: '',
        message: '',
      },
      solutions: [
        {
          title: 'Asset Management',
          subtitle: 'Gain control of your assets with software that helps you keep track of your physical assets.',
        },
        {
          title: 'Risk Management',
          subtitle: 'Identify, capture and monitor enterprise risks with ease.',
        },
        {
          title: 'Document Management',
          subtitle: 'Easy-to-use solution that enables your firm to convert paper into electronic files.',
        },
        {
          title: 'Performance Management',
          subtitle: 'Achieve strategic goals with a solution ensuring organisations are running efficiently.',
        },
        {
          title: 'Audit',
          subtitle: 'Streamline your audit processes and comply with regulations or internal policies.',
        },
        {
          title: 'Compliance Management',
          subtitle: 'Manage and meet legal requirements and comply with applicable laws and regulations.',
        },
      ],
    }
  },
  methods: {
    toggleBurger() {
      this.toggle = !this.toggle
    },
    submitDemo() {
      const subject = encodeURIComponent(`Demo request: ${this.demoForm.company || this.demoForm.name}`)
      const body = encodeURIComponent(
        `Name: ${this.demoForm.name}\nEmail: ${this.demoForm.email}\nCompany: ${this.demoForm.company}\n\n${this.demoForm.message}`
      )
      window.location.href = `mailto:info@prosuite.co.za?subject=${subject}&body=${body}`
    },
  },
  mounted() {
    this.isMobile = window.innerWidth <= 740
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 740
    })
  }
}
</script>
