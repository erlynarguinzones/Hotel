<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <h1>Hotel</h1>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: #ffdab9; /* Pastel orange */
  padding: 2rem;
  min-block-size: 4.5rem;
  box-shadow: 0 2px 0.75rem rgba(12, 14, 28, 0.08);
  margin-bottom: 2rem;
}

.navbar-logo h1 {
  color: #d2b48c; /* Pastel brown */
  font-size: 2.5rem;
  font-weight: bold;
}

.navbar-logo img {
  height: 40px;
  margin-right: 2rem;
}

.nav-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 2rem;
}

.nav-item a {
  color: #f4a460; /* Pastel ochre */
  text-decoration: none;
  font-weight: bold;
}

.nav-item a:hover {
  text-decoration: underline;
}
</style>
