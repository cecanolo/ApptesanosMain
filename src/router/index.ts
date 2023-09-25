import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Main Section
import Login from '@/views/Login.vue'
import SignUp from '@/views/Register.vue'
import thanks from '@/views/Agradecimientos.vue'
import Home from '@/views/Home.vue'
import verify from '@/views/Verify.vue'
import userv from '@/views/Menu/UserVentas.vue'
// Main Section

// Inventory Section
import inventory from '@/views/Menu/Inventory.vue'
import inventory1 from '@/views/Menu/Submenus/Inventory/InventorySub1.vue'
import inventory2 from '@/views/Menu/Submenus/Inventory/inventorySub2.vue'
import inventory3 from '@/views/Menu/Submenus/Inventory/InventorySub3.vue'
import InventoryViewAll from '@/views/Menu/Submenus/Inventory/inventoryViewAll.vue'
// Inventory Section

import calcCost from '@/views/Menu/costs.vue'
import cost1 from '@/views/Menu/Submenus/Costs/costMain.vue'

import reports from '@/views/Menu/report.vue'
import test from '@/views/test.vue'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/verify'
  },
  {
    path: '/verify',
    name: 'Verify',
    component: verify
  },
  {
    path: '/reg',
    name: 'Register',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/thanks',
    name: 'Agradecimientos',
    component: thanks
  },
  {
    path: '/ventas',
    name: 'Ventas Del Usuario',
    component: userv
  },
  {
    path: '/inv',
    name: 'Inventario',
    component: inventory
  },


  // SubMenus Para Inventario
  {
    path: '/inv1',
    name: 'Inventario1',
    component: inventory1
  },
  {
    path: '/inv2',
    name: 'Inventario2',
    component: inventory2
  },
  {
    path: '/inv3',
    name: 'Inventario3',
    component: inventory3
  },
  {
    path: '/invVA',
    name: 'InventarioViewAll',
    component: InventoryViewAll
  },
  // SubMenus Para Inventario
  
  // Sub Menu Para Costos
  {
    path: '/costs',
    name: 'Costos',
    component: calcCost
  },
  {
    path: '/cost1',
    name: 'Costos1',
    component: cost1
  },
  // Sub Menu Para Costos
  {
    path: '/report',
    name: 'Reportes',
    component: reports

  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
