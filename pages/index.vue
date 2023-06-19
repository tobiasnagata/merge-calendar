<template>
  <v-container class="d-flex height-screen">
    <v-row>
      <v-col
        cols="12"
        sm="5"
        class="d-flex flex-column justify-center align-center mt-sm-0 mt-16"
      >
        <h1
          class="text-h1 text-primary text-center font-weight-bold"
          style="line-height: 3rem"
        >
          Merge Calendar
        </h1>
        <p class="text-center text-secondary mt-2" style="max-width: 500px">
          Seamlessly connect everyone's availability for hassle-free
          coordination. Unlock the power of perfect planning!
        </p>
      </v-col>

      <v-col class="d-flex flex-column justify-center">
        <v-form @submit.prevent class="width-100">
          <!-- Event Name Field -->
          <v-text-field
            v-model="eventName"
            :rules="rules"
            label="Event Name"
          ></v-text-field>

          <!-- Time Availability -->
          <div class="d-flex justify-space-between align-center mb-3">
            <div class="d-flex align-center">
              <p>You are on</p>
              <v-chip
                class="ml-2"
                color="white"
                :style="
                  useUTC
                    ? `background-color: #B3541E`
                    : `background-color: ${$vuetify.theme.current.colors['button-primary']}`
                "
                >{{ get_client_timezone(timezone) }}</v-chip
              >
            </div>

            <div>
              <v-switch
                v-model="useUTC"
                label="Use UTC"
                color="#B3541E"
                inset
                hide-details
              ></v-switch>
            </div>
          </div>

          <div class="d-flex justify-space-between">
            <div style="width: 45%">
              <p class="mb-1">Select date range</p>
              <vue-date-picker
                v-model="dateRange"
                :dark="$vuetify.theme.name == 'darkTheme' ? true : false"
                :state="stateDate"
                :enable-time-picker="false"
                multi-dates
              ></vue-date-picker>
            </div>

            <div style="width: 45%">
              <p class="mb-1">Select time range</p>
              <vue-date-picker
                v-model="timeRange"
                :dark="$vuetify.theme.name == 'darkTheme' ? true : false"
                :state="stateTime"
                :start-time="[
                  { hours: 0, minutes: 0 },
                  { hours: 23, minutes: 0 },
                ]"
                range
                time-picker
                no-minutes-overlay
              ></vue-date-picker>
            </div>
          </div>

          <!-- Button Submit -->
          <v-btn
            type="submit"
            color="button-primary"
            class="mt-8 width-100"
            @click="createEvent"
          >
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      eventName: null,
      timezone: null,
      useUTC: false,
      dateRange: null,
      timeRange: null,
      stateDate: null,
      stateTime: null,
      rules: [
        (value) => {
          if (value) return true;

          return "You must enter an event name.";
        },
      ],
    };
  },
  methods: {
    get_client_timezone(tz_offset) {
      let prefix = "GMT";
      let connector = "+";

      if (this.useUTC) {
        return "UTC";
      }

      if (tz_offset == 0) {
        return prefix;
      }

      if (String(tz_offset).search("-") == -1) {
        connector = "-";
      }

      return prefix + connector + Math.abs(tz_offset) / 60;
    },
    createEvent() {
      this.stateDate = this.dateRange == null ? false : null;
      this.stateTime = this.timeRange == null ? false : null;
    },
  },
  mounted() {
    this.timezone = new Date().getTimezoneOffset();
  },
};
</script>