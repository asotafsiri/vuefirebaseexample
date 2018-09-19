<template>
  <div class="">
    <h4> Edit this Event </h4>
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="newEvent.title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="newEvent.description">
      </div>
       <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="newEvent.date">
      </div>
       <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="newEvent.location">
      </div>
      <button class="btn-sm btn-primary" @click="updateEvent">Submit</button>

  </div>
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
      name: 'EditEvent'
  },
  firebase: {
    events: db.ref('events'),
    eventsObj: {
      source: db.ref('events'),
      asObject: true
    }
  },
  data () {
    return {
      newEvent: {}
    }
  },
  created() {
     let event = this.eventsObj[this.$route.params.id]
     this.newEvent = {
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        email: event.email
     }
  },
  methods: {
    updateEvent() {
      this.$firebaseRefs.events.child(this.$route.params.id).set(this.newEvent);
      this.$router.push('/dashboard')
    }
  }
}
</script>
