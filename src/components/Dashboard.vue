<template>

  <div class="">
    <h3>Event Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out </button>
    <hr>
    <AddEvent />
    <hr>
   <div class="col-md-12">

     <EventItem
       v-for="(event_item, index) in this.$store.state.events"
       :event="event_item"
       v-bind:key="index"
     />
   </div>
  </div>
</template>
<script>
import { app, eventsRef } from '../config/db';
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'
export default {

  firebase: {
    events: eventsRef
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      app.auth().signOut()
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      this.$store.dispatch('setEvents', events)
    })
  }

}
</script>

