<template>
  <article style="text-align:center">
    <h2>Използвана литература</h2>
    <p>
        <ul class="more-line-height sources-list">
            <li v-for="source in sources" :key="source">
                <a :href="source.url" target="_blank">{{source.title}}</a>
            </li>
        </ul>
    </p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      sources: [
        {
          url: "https://twitter.com/b0rk/status/822658191733510144?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E822658191733510144%7Ctwgr%5E64480c6e7527ef48571e6e696b2f07ca03841d3d%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fb0rk%2Fstatus%2F822658191733510144image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fpbs.twimg.com252Fmedia252FC2qrQlZWQAAHmGL.jpg253Alarge26key3Da19fcc184b9711e1b4764040d3dc5c07",
          title: "Short twitter extract on CORS",
        },
        {
          url: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#specifications",
          title: "MDN Web Docs - XMLHttpRequest",
        },
        {
          url: "https://fetch.spec.whatwg.org/",
          title: "Fetch Spec - on Web Development terminology and mechanisms",
        },
        {
          url: "https://livebook.manning.com/book/cors-in-action/about-this-book/",
          title: "Manning - CORS in Action",
        },
        {
          url: "https://owasp.org/www-community/attacks/csrf",
          title: "KirstenS - Cross Site Request Forgery (CSRF)",
        },
        {
          url: "https://www.w3.org/wiki/CORS_Enabled",
          title: "W3C - CORS Enabled",
        },
        {
          url: "https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/",
          title:
            "Derric Gilling - Authoritative guide to CORS (Cross-Origin Resource Sharing) for REST APIs",
        },
        {
          url: "https://httpwg.org/specs/rfc9110.html#overview.of.status.codes",
          title: "Overview of Status Codes",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sources-list {
  text-align: center;
  list-style-position: inside;
  list-style-type: square;
}
</style>