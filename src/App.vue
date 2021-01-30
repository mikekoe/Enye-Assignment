<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Assignment</h1>

      </div>

      <v-spacer></v-spacer>

      <v-btn
      >
        <span class="mr-2">Soluki</span>
      </v-btn>
    </v-app-bar>

    <v-main>
     <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      item-key="name"
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>


    </v-main>
  </v-app>
</template>

<script>
  import axios from "axios"
  export default {
    data () {
      return {
        loading: true,
        search: '',
        headers: [
          {
            text: 'First Name',
            align: 'start',
            filterable: true,
            value: 'FirstName',
          },
          { text: 'Last Name', value: 'LastName', filterable: false, },
          { text: 'Gender', value: 'Gender' },
          { text: 'Latitude', value: 'Latitude', filterable: false, },
          { text: 'Longitude', value: 'Longitude', filterable: false, },
          { text: 'Credit Card No', value: 'CreditCardNumber', filterable: false, },
          { text: 'Credit Card Type', value: 'CreditCardType', filterable: false, },
          { text: 'Email', value: 'Email', filterable: false, },
          { text: 'DomainName', value: 'DomainName', filterable: false, },
          { text: 'Phone Number', value: 'PhoneNumber', filterable: false, },
        ],
        desserts: [],
      }
    },
    created(){
      this.getUserProfileData()
    },
    methods: {
      getUserProfileData(){
        this.loading
        axios.get("https://api.enye.tech/v1/challenge/records").then(data => {
          this.loading = false
          this.desserts = data.data.records.profiles
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
