document.addEventListener("DOMContentLoaded", function(){

    const cards =
        document.querySelectorAll(
            ".card, .feature, .career"
        );

    if("IntersectionObserver" in window){

        const observer =
            new IntersectionObserver(
                function(entries){

                    entries.forEach(function(entry){

                        if(entry.isIntersecting){

                            entry.target.style.opacity = "1";
                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold:0.1
                }
            );

        cards.forEach(function(card){

            card.style.opacity = "0";
            card.style.transform =
                "translateY(15px)";

            card.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(card);

        });

    }

    const navbar =
        document.querySelector(".navbar");

    if(navbar){

        window.addEventListener(
            "scroll",
            function(){

                if(window.scrollY > 30){

                    navbar.style.boxShadow =
                        "0 10px 30px rgba(0,0,0,.25)";

                }else{

                    navbar.style.boxShadow =
                        "none";

                }

            }
        );

    }

});
