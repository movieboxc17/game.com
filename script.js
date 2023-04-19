const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

<!-- PushAlert Onsite Messaging -->
<script type="text/javascript">
    (function(d, t) {
        var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
        g.src = "https://cdn.inwebr.com/inwebr_d218df97aae8365c4bb3d5e5afc28204.js";
        s.parentNode.insertBefore(g, s);
    }(document, "script"));
</script>
<!-- End PushAlert Onsite Messaging -->
