<template>
  <div class="col-md-for" >
    <div class="col-md-12" v-for="event of events" :key="event['.key']">
    <div class="event-card" v-if="showData(event)" >
     <button class="close" @click="deleteEvent(event['.key'])"><span>&times;</span></button>
      <h4 class="card-title">{{ event.title }}</h4>
      <p class="card-text">{{ event.description }}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Date: {{ event.date }}</li>
        <li class="list-group-item">Location: {{ event.location }}</li>
        <li class="list-group-item">Host: {{ event.email }}</li>
        <div class="list-group-item"> <input type="checkbox" v-model= " event.Done " @click="updateEvent(event, event['.key'])" >
          <h1  v-if="event.Done">Done</h1>
          <h1  v-else>Do</h1>
        </div>
        <li>
          <router-link :to="{ name: 'EditEvent', params: {id: event['.key']} }" class="btn btn-warning">
            Edit
          </router-link>
        </li>
      </ul>
    </div>
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

import { db } from '../config/db';
export default {
  components: {
      name: 'EventItem.vue'
  },
   data() {
    return {
      events: []
    }
  },
  firebase: {
    events: db.ref('events')
  },
  methods: {
    deleteEvent(key) {
    this.$firebaseRefs.events.child(key).remove();
    },
     updateEvent(event, key) {
      this.$firebaseRefs.events.child(key).set({
          title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        email: event.email,
        Done: !event.Done


      })
     // this.$router.push('/dashboard')
    },
    showData(event){
      if ( this.$store.state.user.email == event.email) {
       return true;
      }
      else {
        return false;
      }
    }
  }
}
</script>


