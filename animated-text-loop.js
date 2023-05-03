import React, { useEffect, useRef } from "react";

function AnimatedTextLoop({
  fontSize,
  textColor,
  latters,
  fontWeight,
  AnimationLoopTime,
  characterAnimationSpeed,
  AnimationType,
  hiddenOpacity
}) {
  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
        if(AnimationType == "One")
    {
    const container = containerRef.current;
    const children = container.children;
    let animationTimeout = null;
    const animatecharacters = (first) => {
      isAnimatingRef.current = true;
      let delay = 50;
      for (let i = 0; i < children.length; i++) {
        const FirstText = children[i].children[0];
        const SecondText = children[i].children[1];
        let CurrentcharacterAnimationStart = null;
        let CurrentcharacterAnimationEnd = null;
        setTimeout(() => {

        if(first)
        {         
            CurrentcharacterAnimationStart = FirstText;
            CurrentcharacterAnimationStart.style.color = "#6021d5"
            children[i >= 1 ? i - 1 : 0].children[0].style.color = "#fff";
            FirstText.style.transform ="translate(0px, 45px)";
            SecondText.style.transform = "translate(0px, 0px)";
            FirstText.style.opacity = "100";
            SecondText.style.opacity = "0";
            FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            FirstText.textContent = latters[0][i];

        }else 
        {
            CurrentcharacterAnimationEnd = SecondText;
            CurrentcharacterAnimationEnd.style.color = "#6021d5"
            children[i >= 1 ? i - 1 : 0].children[1].style.color = "#fff";
            SecondText.textContent =  latters[1][i];
            FirstText.style.opacity = "0";
            SecondText.style.opacity = "100";
            SecondText.style.transform ="translate(0px, -50px)";
            FirstText.style.transform ="translate(0px, 0px)";
            FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";

        }
          if (i === children.length - 1 && !first) {
                isAnimatingRef.current = false;
                CurrentcharacterAnimationEnd.style.color = "#fff"
                animationTimeout = setTimeout(() => {
                    animatecharacters(true);
                }, AnimationLoopTime);
          }else if (i === children.length - 1 && first) {
            isAnimatingRef.current = false;
            CurrentcharacterAnimationStart.style.color = "#fff"
            animationTimeout = setTimeout(() => {
                animatecharacters(false);
            }, AnimationLoopTime);
      }
        }, delay);

        delay += characterAnimationSpeed;
      }
    
    };

    const startAnimation = () => {
        animatecharacters(true);
    };
    startAnimation();



    return () => {
      clearTimeout(animationTimeout);
     
    };
  }else if(AnimationType == "Two")
  {
    let FirstTextUpPosition = "translate(0px, -10px)"
    let FirstTextDownPosition = "translate(0px, 100px)"
    let FirstTextCenterPosition = "translate(0px, 45px)"
    let SecondTextUpPosition = "translate(0px, -110px)"
    let SecondTextCenterPosition = "translate(0px, -50px)"
    let SecondTextDownPosition = "translate(0px, -1px)"
    const container = containerRef.current;
    const children = container.children;
    let animationTimeout = null;
    const animatecharacters = (first) => {
      isAnimatingRef.current = true;
      let delay = 50;
      
      let CurrentFirstAnimatioMove = "Down";
      for (let i = 0; i < children.length; i++) {

        const FirstText = children[i].children[0];
        const SecondText = children[i].children[1];
        let CurrentcharacterAnimationStart = null;
        let CurrentcharacterAnimationEnd = null;
        setTimeout(() => {
        
        if(first)
        {         
            CurrentcharacterAnimationStart = FirstText;
            CurrentcharacterAnimationStart.style.color = "#6021d5"
            children[i >= 1 ? i - 1 : 0].children[0].style.color = "#fff";
            if(CurrentFirstAnimatioMove == "Down")
            {
              FirstText.style.transform =   FirstTextCenterPosition;
              SecondText.style.transform =  SecondTextUpPosition;
              CurrentFirstAnimatioMove = "up"
            }else 
            {
              FirstText.style.transform =   FirstTextCenterPosition;
              SecondText.style.transform =   SecondTextDownPosition;
              CurrentFirstAnimatioMove = "Down"
            }
            FirstText.style.opacity = "100%";
            SecondText.style.opacity = hiddenOpacity;
            FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            FirstText.textContent = latters[0][i];
        }else 
        {
            CurrentcharacterAnimationEnd = SecondText;
            CurrentcharacterAnimationEnd.style.color = "#6021d5"
            children[i >= 1 ? i - 1 : 0].children[1].style.color = "#fff";
            SecondText.textContent =  latters[1][i];
            FirstText.style.opacity = hiddenOpacity;
            SecondText.style.opacity = "100%";
            if(CurrentFirstAnimatioMove == "Down")
            {
              SecondText.style.transform = SecondTextCenterPosition;
              FirstText.style.transform =   FirstTextDownPosition;
              CurrentFirstAnimatioMove = "up"
            }else 
            {
              SecondText.style.transform = SecondTextCenterPosition;
              FirstText.style.transform = FirstTextUpPosition;
              CurrentFirstAnimatioMove = "Down"
            }
            FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
        }      
          if (i === children.length - 1 && !first) {
                isAnimatingRef.current = false;
                CurrentcharacterAnimationEnd.style.color = "#fff"
                animationTimeout = setTimeout(() => {
                    animatecharacters(true);
                }, AnimationLoopTime);
          }else if (i === children.length - 1 && first) {
            isAnimatingRef.current = false;
            CurrentcharacterAnimationStart.style.color = "#fff"
            animationTimeout = setTimeout(() => {
                animatecharacters(false);
            }, AnimationLoopTime);
      }
        }, delay);
        CurrentFirstAnimatioMove ="Down";
        delay += characterAnimationSpeed;
      }
    
    };

    const startAnimation = () => {
        animatecharacters(true);
    };
    startAnimation();



    return () => {
      clearTimeout(animationTimeout);
     
    };
  }
  }, [latters]);

      if(AnimationType == "One")
{
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            borderRadius: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={containerRef}
        >
          {
            latters[0].split("").map((character, index) => (
              <div key={index} style={{ fontWeight: fontWeight, fontSize: fontSize, color: textColor, }}>
                <div style={{ transform: "translate(0px, -15px)", opacity: "0" }}>{character}</div>
                <div style={{ transform: "translate(0px, -50px)", opacity: "100" }}>{latters[1][index]}</div>
              </div>
            ))
          }
         
        </div>
      </div>
    </div>
  );
}else if(AnimationType == "Two")
{
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            borderRadius: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={containerRef}
        >
          {
            latters[0].split("").map((character, index) => (
              <div key={index} style={{ fontWeight: fontWeight, fontSize: fontSize, color: textColor, }}>
                <div style={{ transform: "translate(0px, -15px)", opacity: "0" }}>{character}</div>
                <div style={{ transform: "translate(0px, -50px)", opacity: "100" }}>{latters[1][index]}</div>
              </div>
            ))
          }
         
        </div>
      </div>
    </div>
  );
}
};

export default AnimatedTextLoop;