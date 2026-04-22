/*
  FILTER
*/

// Alle Filter-Buttons
const filterButtons = document.querySelectorAll('button[data-toggle]');

// Button-Click-Events
filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const filterClass = this.getAttribute('data-toggle');
    const allDivs = document.querySelectorAll('.layout > div');
    
    // Spezialfall: "Alle" Button
    if (filterClass === 'all') {
      // Alle divs - .none Klasse entfernen
      allDivs.forEach(div => {
        div.classList.remove('none');
      });
    } else {
      // Normale Filter: Alle divs durchgehen und .none Klasse anwenden/entfernen
      allDivs.forEach(div => {
        if (div.classList.contains(filterClass)) {
          // Das ausgewählte Element - .none entfernen
          div.classList.remove('none');
        } else {
          // Alle anderen Elemente - .none hinzufügen
          div.classList.add('none');
        }
      });
    }
  });
});

// Einzelansicht
const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const dx = e.clientX - centerX;

  // 1) Hauptbewegung: Flip (klar, aber ruhig)
  const flip = Math.max(-180, Math.min(180, dx / 4));

  // 2) Nur ein Hauch 2D-Rotation
  const subtleRotate = dx / 200; // ca. ±2°

  card.style.transform = `
    rotate(${subtleRotate}deg)
    rotateY(${flip}deg)
  `;
});

// Card beim Klicken umschalten (verstecken/anzeigen)
document.addEventListener("click", () => {
  if (card.style.display === "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});



