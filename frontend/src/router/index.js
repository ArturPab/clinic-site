import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Vaccinates from "../views/Vaccinates.vue"
import PatientRights from "../views/PatientRights.vue"
import Services from "../views/Services.vue"
import Service from "@/components/services-components/Service.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/o-nas",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/szczepienia",
    name: "Vaccinates",
    component: Vaccinates,
  },
  {
    path: "/prawa-pacjenta",
    name: "PatientRights",
    component: PatientRights
  },
  {
    path: "/poradnie",
    name: "Services",
    component: Services
  },
  {
    path: "/poradnie/:name",
    name: "Service",
    component: Service,
    props: true
  },
  /*{
    path: "/poradnie/stomatologia",
    name: "Dentistry",
    component: Service
  },
  {
    path: "/poradnie/chirurgia",
    name: "Surgery",
    component: Service
  },
  {
    path: "/poradnie/diagnostyka",
    name: "Diagnostics",
    component: Service,
    props: true
  },
  {
    path: "/poradnie/ginekologia",
    name: "Gynecology",
    component: Service,
    props: true
  },
  {
    path: "/poradnie/opieka",
    name: "Care",
    component: Service,
    props: true
  },
  {
    path: "/poradnie/psychologia",
    name: "Psychology",
    component: Service,
    props: true
  },
  {
    path: "/poradnie/rehabilitacja",
    name: "Rehabilitation",
    component: Service,
    props: true
  },
  {
    path: "/poradnie/transport",
    name: "Transport",
    component: Service,
    props: true
  },
  {
    path: "/poradnie/medycyna-pracy",
    name: "Medicine",
    component: Service,
    props: true
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
