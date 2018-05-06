//random force points and tooltip for force
module.exports.forcePoints = function(){
  let randomForcePoints = Math.round(Math.random()*50);
  $("#forcePoints").text(randomForcePoints);
  module.exports.forcePoint = randomForcePoints;
}

module.exports.forceTooltip = function(){
  $("#force").on("mouseenter", () =>{
    $("#featuresDescription").text("SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.");
  });

  $("#force").on("mouseleave", () =>{
    $("#featuresDescription").text("");
  });
}

//random strenght points and tooltip for strenght
module.exports.strenghtPoints = function(){
  let randomStrenghtPoints = Math.round(Math.random()*50);
	$("#strenghtPoints").text(randomStrenghtPoints);
	  module.exports.strenghtPoint = randomStrenghtPoints;
}

module.exports.strenghtTooltip = function(){
  $("#strenght").on("mouseenter", () =>{
    $("#featuresDescription").text("WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby  lub trucizny. Ważna dla wojowników.");
  });

  $("#strenght").on("mouseleave", () =>{
    	$("#featuresDescription").text("");
  });
}

//random skill points and tooltip for skill
module.exports.skillPoints = function(){
    let randomSkillPoints = Math.round(Math.random()*50);
    $("#skillPoints").text(randomSkillPoints);
    module.exports.skillPoint = randomSkillPoints;
}

module.exports.skillTooltip = function(){
    $("#skill").on("mouseenter", () =>{ $("#featuresDescription").text("ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.");
    });

    $("#skill").on("mouseleave", () =>{	$("#featuresDescription").text("");
  });
}

//random intellectuals points and tooltip for intellectuals
module.exports.intellectualsPoints = function(){
	let randomIntellectualsPoints = Math.round(Math.random()*50);
	$("#intellectualsPoints").text(randomIntellectualsPoints);
	  module.exports.intellectualsPoint = randomIntellectualsPoints;
}

module.exports.intellectualsTooltip = function (){
  $("#intellectuals").on("mouseenter", () =>{ $("#featuresDescription").text("INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd.");
});

$("#intellectuals").on("mouseleave", () =>{	$("#featuresDescription").text("");});
}

//random charisma points and tooltip for charisma
module.exports.charismaPoints = function(){
	let randomCharismaPoints = Math.round(Math.random()*50);
	$("#charismaPoints").text(randomCharismaPoints);
	  module.exports.charismaPoint = randomCharismaPoints;
}

module.exports.charismaTooltip = function(){
  $("#charisma").on("mouseenter", () =>{ $("#featuresDescription").text("CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów.");
  });

  $("#charisma").on("mouseleave", () =>{	$("#featuresDescription").text("");
  });
}
