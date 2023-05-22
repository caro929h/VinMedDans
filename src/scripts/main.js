fetch("https://xqvteegxtrhyaxryzjmy.supabase.co/rest/v1/Vine", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdnRlZWd4dHJoeWF4cnl6am15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MDA4MTgsImV4cCI6MTk5OTI3NjgxOH0.fIAM4hosM6TLUsP1u7U7f2kO-f0G5EN_4OfCSRzoeg4",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach()
}
