import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)



// ============ COMPARADOR ============
if (document.querySelector(".comp-titulo")) {
    gsap.from(".comp-titulo", {
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "power3.out"
    })

    gsap.fromTo(".comp-card-left",
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.4 }
    )

    gsap.fromTo(".comp-card-right",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.4 }
    )

    gsap.fromTo(".comp-labels",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.7 }
    )

    gsap.fromTo(".comp-row",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.9 }
    )
}

// ============ PUPUSAS ============
document.querySelectorAll(".btn-pupusa").forEach(button => {
    button.addEventListener("click", (e) => {
        const pupusas = ["🫓", "🫓", "🫓", "🌽", "🧀"]
        for (let i = 0; i < 12; i++) {
            const emoji = document.createElement("span")
            emoji.textContent = pupusas[Math.floor(Math.random() * pupusas.length)]
            emoji.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 30 + 20}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        z-index: 9999;
      `
            document.body.appendChild(emoji)
            gsap.to(emoji, {
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 1.5) * 300,
                opacity: 0,
                rotation: Math.random() * 360,
                duration: Math.random() * 1 + 0.8,
                ease: "power2.out",
                onComplete: () => emoji.remove()
            })
        }
    })
})

// ============ HOME ============
if (document.querySelector(".home-welcome")) {

    // Subtítulo fade in
    gsap.from(".home-sub", {
        duration: 1.2,
        opacity: 0,
        y: 20,
        ease: "power2.out",
        delay: 0.5
    })

    // Títulos de sección al hacer scroll
    gsap.utils.toArray(".home-section-title").forEach(title => {
        const texto = title.innerText
        title.innerHTML = texto
            .split("")
            .map(char => `<span class="home-letra" style="display:inline-block">${char === " " ? "&nbsp;" : char}</span>`)
            .join("")

        gsap.from(title.querySelectorAll(".home-letra"), {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            },
            duration: 0.5,
            opacity: 0,
            y: -20,
            rotationX: 90,
            stagger: 0.03,
            ease: "back.out(1.7)"
        })
    })

    // Cards del carrusel al hacer scroll
    gsap.utils.toArray(".home-card").forEach(card => {
        gsap.fromTo(card,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                }
            }
        )
    })
}

// Shimmer en "Welcome" — siempre en movimiento
if (document.querySelector(".home-welcome")) {
    const welcomeEl = document.querySelector(".home-welcome")
    welcomeEl.style.backgroundImage = "linear-gradient(90deg, #fff 0%, #fff 40%, #4182b4 50%, #fff 60%, #fff 100%)"
    welcomeEl.style.backgroundSize = "200% auto"
    welcomeEl.style.webkitBackgroundClip = "text"
    welcomeEl.style.webkitTextFillColor = "transparent"
    welcomeEl.style.backgroundClip = "text"

    gsap.to(welcomeEl, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "none",
        repeat: -1
    })
}
{
    const canvas = document.createElement("canvas")
    canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    })

    const particulas = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1
    }))

    function animarParticulas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particulas.forEach(p => {
            p.x += p.speedX
            p.y += p.speedY

            // Rebotar en los bordes
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

            ctx.beginPath()
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(65, 130, 180, ${p.opacity})`
            ctx.fill()
        })

        requestAnimationFrame(animarParticulas)
    }

    animarParticulas()
}

// ============ LANDING ============
if (document.getElementById("landing-titulo")) {

  // Logo
  gsap.from("#landing-logo", {
    duration: 1,
    y: -60,
    opacity: 0,
    ease: "back.out(1.5)",
    delay: 0.2
  })

  // Título letra por letra
  const titulo = document.getElementById("landing-titulo")
  const texto = titulo.innerText

  titulo.innerHTML = texto
    .split("")
    .map(c => `<span style="
      display: inline-block;
      background: linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #4182b4 48%, #DFEEF3 52%, #ffffff 65%, #ffffff 100%);
      background-size: 250% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    ">${c === " " ? "&nbsp;" : c}</span>`)
    .join("")

  gsap.from("#landing-titulo span", {
    duration: 0.7,
    opacity: 0,
    y: -30,
    rotationX: 90,
    transformOrigin: "top center",
    perspective: 400,
    stagger: 0.035,
    ease: "back.out(2)",
    delay: 0.5,
    onComplete: () => {
      gsap.to("#landing-titulo span", {
        backgroundPosition: "250% center",
        duration: 4,
        ease: "none",
        repeat: -1
      })
    }
  })

  // Línea de luz
  gsap.to("#landing-linea", {
    width: "320px",
    duration: 1.2,
    ease: "power3.out",
    delay: 1.8
  })

  // Subtítulo
  gsap.to("#landing-sub", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 2
  })


  const emojisAvion = ["📦", "📦", "📫", "📬", "🎁"]


  // Cajitas cayendo
  function crearCajita() {
    const cajita = document.createElement("div")
    cajita.style.cssText = `
      position: fixed;
      z-index: 4;
      pointer-events: none;
      font-size: ${Math.random() * 16 + 20}px;
      left: ${Math.random() * (window.innerWidth - 60)}px;
      top: -50px;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
    `
    cajita.textContent = emojisAvion[Math.floor(Math.random() * emojisAvion.length)]
    document.body.appendChild(cajita)

    gsap.to(cajita, {
      y: window.innerHeight + 80,
      x: (Math.random() - 0.5) * 100,
      rotation: (Math.random() - 0.5) * 360,
      opacity: 0,
      duration: Math.random() * 4 + 4,
      ease: "power1.in",
      onComplete: () => cajita.remove()
    })

    setTimeout(crearCajita, Math.random() * 3000 + 2000)
  }

  setTimeout(crearCajita, 1500)
}





// Pulso de brillo infinito para iconos premium
gsap.to(".icon-premium", {
  filter: "drop-shadow(0 0 6px #4182B4) drop-shadow(0 0 12px #4182B4)",
  scale: 1.15,
  duration: 1.2,
  ease: "sine.inOut",
  repeat: -1,        // infinito
  yoyo: true,        // va y vuelve
});












gsap.to(".card-premium", {
  boxShadow: "0 0 0 2px #4182b4, 0 0 20px 15px #4182b4", // Aumenté el brillo final
  duration: 1.5,
  repeat: -1,      // Infinito
  yoyo: true,      // Hace que regrese suavemente en lugar de saltar
  ease: "sine.inOut" // Hace que el pulso se sienta natural
});

gsap.to(".card-premium", {
  duration: 2,
  keyframes: {
    "0%":   { boxShadow: "0 0 0 2px #4182b4, 0 0 20px 6px #4182b4" }, // Dorado
    "50%":  { boxShadow: "0 0 0 2px #2467A2, 0 0 20px 6px #2467A2" }, // Rosa
    "100%": { boxShadow: "0 0 0 2px #4182b4, 0 0 20px 6px #4182b4" }  // Azul
  },
  repeat: -1,
  yoyo: true, // Al llegar al azul, vuelve al rosa y luego al dorado
  ease: "none" // Mantiene la velocidad constante para que no parezca que "frena"
});




//agencias



gsap.registerPlugin(ScrollTrigger);

const exists = (selector) => document.querySelector(selector);

if (exists(".titulo-principal")) {
  gsap.from(".titulo-principal", {
    y: 80, opacity: 0, duration: 1, ease: "power3.out",
    scrollTrigger: {
      trigger: ".titulo-principal",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
}

if (exists(".linea-deco")) {
  gsap.from(".linea-deco", {
    scaleX: 0, opacity: 0, duration: 0.8, delay: 0.3,
    ease: "power2.out", transformOrigin: "left center",
    scrollTrigger: {
      trigger: ".linea-deco",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
}

gsap.utils.toArray(".agency-card").forEach((card, index) => {
  gsap.from(card, {
    y: 120, opacity: 0, duration: 0.7,
    delay: index * 0.12, ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 88%", end: "top 20%",
      toggleActions: "play none none reverse"
    }
  });
});

if (exists("input")) {
  gsap.from("input", {
    y: 50, opacity: 0, duration: 0.8, ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "input",
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
}

if (exists("footer")) {
  gsap.from("footer", {
    y: 60, opacity: 0, duration: 0.9, ease: "power2.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 95%",
      toggleActions: "play none none reverse"
    }
  });
}


if (document.getElementById("perfil-ring")) {
  gsap.to("#perfil-ring", {
    rotation: 360,
    duration: 6,
    ease: "none",
    repeat: -1
  })


  gsap.to("#perfil-glow", {
    boxShadow: "0 0 70px 20px rgba(65, 130, 180, 0.7)",
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  })

  
  gsap.from("img[src*='aiclient']", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(2)",
    delay: 0.3
  })
}