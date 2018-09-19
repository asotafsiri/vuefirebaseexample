<template>
  <div class="col-md-for">
    <div class="event-card">

     <button class="close" @click="deleteEvent()"><span>&times;</span></button>
      <h4 class="card-title">{{ event.title }}</h4>
      <p class="card-text">{{ event.description }}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Date: {{ event.date }}</li>
        <li class="list-group-item">Location: {{ event.location }}</li>
        <li class="list-group-item">Host: {{ event.email }}</li>
      </ul>
    </div>

  </div>
</template>
<style>
.event-card {
  border: 2px solid #2C3E50;
  margin-top: 10px;
  border-radius: 4px;
}
</style>

<script>
import { eventsRef } from '../config/db';
import { mapActions } from 'vuex'
export default {
  props: ['event', 'index'],
  methods: {
    deleteEvent() {
    eventsRef.child.event.remove()

    mapActions([
    'removeEvent'
  ])
   },

  }
}
</script>

