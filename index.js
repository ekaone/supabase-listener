require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Listening to row level changes

const mySubscription = supabase
  .from("countries:id=eq.200")
  .on("UPDATE", handleRecordUpdated)
  .subscribe();

// Subscribe to realtime changes in your databse
const mySubscription = supabase
  .from("*")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

// Listen to all database changes
const mySubscription = supabase
  .from("*")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

// Listening to a specific table
const mySubscription = supabase
  .from("countries")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

// Listening to inserts
const mySubscription = supabase
  .from("countries")
  .on("INSERT", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

// Listening to multiple events
const mySubscription = supabase
  .from("countries")
  .on("INSERT", handleRecordInserted)
  .on("DELETE", handleRecordDeleted)
  .subscribe();


// Listening to deletes

// enable full replication for the table you are listening too
alter table "your_table" replica identity full;

const mySubscription = supabase
  .from('countries')
  .on('DELETE', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
