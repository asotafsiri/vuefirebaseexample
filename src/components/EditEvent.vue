<template>
  <div class="">
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
       <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
       <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
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
      this.$router.push('/index')
    }
  }
}
</script>
