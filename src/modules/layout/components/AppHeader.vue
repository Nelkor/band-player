<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/music">Музыка</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
