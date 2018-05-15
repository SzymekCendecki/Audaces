//random force points and description
module.exports.forcePoints = function(){
  let randomForcePoints = Math.round(Math.random()*50);
  $("#forcePoints").text(randomForcePoints);
  module.exports.forcePoint = randomForcePoints;
}

module.exports.forceTooltip = function(){
  $("#force").on("click", () =>{
    $("#featuresDescription").text("SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.");
  });
}

//random strenght points and description
module.exports.strenghtPoints = function(){
  let randomStrenghtPoints = Math.round(Math.random()*50);
	$("#strenghtPoints").text(randomStrenghtPoints);
	  module.exports.strenghtPoint = randomStrenghtPoints;
}

module.exports.strenghtTooltip = function(){
  $("#strenght").on("click", () =>{
    $("#featuresDescription").text("WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby  lub trucizny. Ważna dla wojowników.");
  });
}

//random skill points and description
module.exports.skillPoints = function(){
    let randomSkillPoints = Math.round(Math.random()*50);
    $("#skillPoints").text(randomSkillPoints);
    module.exports.skillPoint = randomSkillPoints;
}

module.exports.skillTooltip = function(){
    $("#skill").on("click", () =>{ $("#featuresDescription").text("ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.");
    });
}

//random intellectuals points and description
module.exports.intellectualsPoints = function(){
	let randomIntellectualsPoints = Math.round(Math.random()*50);
	$("#intellectualsPoints").text(randomIntellectualsPoints);
	  module.exports.intellectualsPoint = randomIntellectualsPoints;
}

module.exports.intellectualsTooltip = function (){
  $("#intellectuals").on("click", () =>{ $("#featuresDescription").text("INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd.");
});
}

//random charisma points and description
module.exports.charismaPoints = function(){
	let randomCharismaPoints = Math.round(Math.random()*50);
	$("#charismaPoints").text(randomCharismaPoints);
	  module.exports.charismaPoint = randomCharismaPoints;
}

module.exports.charismaTooltip = function(){
  $("#charisma").on("click", () =>{ $("#featuresDescription").text("CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów.");
  });
}
