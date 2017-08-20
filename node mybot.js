const Discord = require("discord.js");
const client = new Discord.Client();

client.login("MzM5MDExMTExNTM1NzcxNjQ4.DFh7mQ.eRZ9D8LHQjY8oQtGLLN54YWB9vs");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  // Set the prefix
  let prefix = "!";
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "oh")) {
    message.channel.send("BOEY!");
  } else
  if (message.content.startsWith(prefix + "Oh")) {
    message.channel.send("BOEY!");
  } else
  if (message.content.startsWith(prefix + "OH")) {
    message.channel.send("BOEY!");
  } else
   if (message.content.startsWith(prefix + "Introduce yourself, Lon'qu.")) {
    message.channel.send("I'm Lon'qu, a swordsman from Regna Ferox. And...that's all there is to know about me.");
  } else
  if (message.content.startsWith(prefix + "reprimand")) {
    message.channel.sendMessage("Stop being mean Liam.");
 } else
  if (message.content.startsWith(prefix + "Lon'choo")) {
   message.channel.send("All aboard the Lon'choo choo train!");
 } else
  if (message.content.startsWith(prefix + "proof")) {
    message.channel.send("https://www.youtube.com/watch?v=1vKcHYXM62k&");
 } else
 if (message.content.startsWith(prefix + "grimaassist")) {
   message.channel.send("Grima doesn't need an assist.");
 } else
 if (message.content.startsWith(prefix + "corrinstatus")) {
   message.channel.send("Still dead.");
 } else
 if (message.content.startsWith(prefix + "ryomer")) {
   message.channel.send("The lobster king that is in need of orbs.");
 }
 if (message.content.startsWith(prefix + "takumeme")) {
   message.channel.send("Ryoma's tax collector. Has killed Corrin over 924384 times. m Hoshido.")
 }
 if (message.content.startsWith(prefix + "takumiassist")) {
   message.channel.send("Takumi needs an assist, but no one wants to assist him so he can just assist himself.")
 }
 if (message.content.startsWith(prefix + "OP'qu")) {
   message.channel.send("6* +10 Blue dragon wyvern rider singer dancer bow mage armored unit healer axe lance sword falchion grima tome wings of mercy close counter distant counter renewal 3 moonbow astra Lon'qu.")
 }
 if (message.content.startsWith(prefix + "ryanreminder")) {
   message.channel.send("Remember to 5* Lon'qu to repent for your sins.")
 }
 if (message.content.startsWith(prefix + "blameevan")) {
   message.channel.send("It's Evan's fault!")
 }
 if (message.content.startsWith(prefix + "blameryan")) {
  message.channel.send("It's Ryan's fault!")
}
if (message.content.startsWith(prefix + "blamedavid")) {
  message.channel.send("It's David's fault!")
}
if (message.content.startsWith(prefix + "blameliam")) {
  message.channel.send("It's Liam's fault!")
}
if (message.content.startsWith(prefix + "blametiffany")) {
  message.channel.send("It's never Tiffany's fault.")
}
if (message.content.startsWith(prefix + "blametakumi")) {
  message.channel.send("It's always Takumi's fault!")
}
if (message.content.startsWith(prefix + "blameiago")) {
  message.channel.send("It's Iago's fault because nobody likes him.")
}
if (message.content.startsWith(prefix + "blamenarcian")) {
  message.channel.send("It's Narcian's fault!")
}
if (message.content.startsWith(prefix + "blamelon'qu")) {
  message.channel.send("Me? Have I done something wrong? :O")
}
if (message.content.startsWith(prefix + "blamecmds")) {
  message.channel.send("evan ryan david liam tiffany takumi iago narcian lon'qu")
}
if (message.content.startsWith(prefix + "trodin")) {
  message.channel.send("no")
}
if (message.content.startsWith(prefix + "luck")) {
  message.channel.send("You have the devil's own luck!")
}
if (message.content.startsWith(prefix + "emoji")) {
  message.channel.send("<:Lonqu2:331664399561654276>")
}
if (message.content.startsWith(prefix + "spam")) {
  message.channel.send("Stop being a Narcian!")
}
 if (message.content.startsWith(prefix + "Neku")) {
   message.channel.send("A youtuber who makes... 'music'")
 }
 if (message.content.startsWith(prefix + "roast1")) {
   message.channel.send("Neku's music is about as good as his sleep schedule.")
 }
 if (message.content.startsWith(prefix + "roast2")) {
   message.channel.send("Neku's music is as trashy as his streaming schedule.")
 }
 if (message.content.startsWith(prefix + "roast3")) {
   message.channel.send("Neku is such a failure that he doesn't know how to spell 'collab' right.")
 }
 if (message.content.startsWith(prefix + "surrender")) {
   message.channel.send("An original song by neku that he's never going to finish. Might as well *surrender* your hopes of hearing it again.")
 }
 if (message.content.startsWith(prefix + "Surrender")) {
   message.channel.send("An original song by neku that he's never going to finish. Might as well *surrender* your hopes of hearing it again.")
 }
 if (message.content.startsWith(prefix+ "lying coldly")) {
   message.channel.send("The most requested song by one person. Neku once worked on it while drunk in the early AM's. He's never going to finish it. It's actually more likely that he'll make a good remix than finish Lying Coldly.")
 }
 if (message.content.startsWith(prefix + "productivity")) {
   message.channel.send("Something that neku is incapable of.")
 }
 if (message.content.startsWith(prefix + "overwatch")) {
   message.channel.send("What neku is playing if he's not sleeping or crushing dreams.")
 }
 if (message.content.startsWith(prefix + "azumi")) {
   message.channel.send("One of the most pure, kind, and innocent people on this server. She's an amazing artist as well. Be nice to her. :)")
 }
 if (message.content.startsWith(prefix + "el capitan")) {
   message.channel.send("Captain of the love ship!!")
 }
 if (message.content.startsWith(prefix + "lucy")) {
   message.channel.send("Please don't ban her.")
 }
if (message.content.startsWith(prefix + "lyoko")) {
  message.channel.send("Amazing at graphic design. Enjoys Code Lyoko. *Especially* Code Lyoko: Evolution")
}
if (message.content.startsWith(prefix + "manly")) {
  message.channel.send("He came here to give hugs and spread love.")
}
if (message.content.startsWith(prefix + "ptil")) {
  message.channel.send("")
}
if (message.content.startsWith(prefix + "ptil1")) {
  message.channel.send("'L'originalité n'est rien qu'une judicieuse imitation' - Voltaire")
}
if (message.content.startsWith(prefix + "ptil2")) {
  message.channel.send("im a living and breathing meme machine it just takes time to make good content")
}
if (message.content.startsWith(prefix + "gotosleepneku")) {
  message.channel.send("<@147188892175564800> IT'S REALLY LATE GO TO SLEEP YOU PLEB")
}
if (message.content.startsWith(prefix + "livestream")) {
  message.channel.send("What neku hasn't done in a month, but many people miss :( Just like how people miss when neku used to make good content- oh wait that never happened.")
}
if (message.content.startsWith(prefix + "heropleasehelpme")) {
  message.channel.send("PLEASE TEACH ME HOW TO ADD COMMANDS THAT GIVE A RANDOM RESPONSE EACH TIME BECAUSE I DON'T KNOW HOW TO CODE AT ALL.")
}
if (message.content.startsWith(prefix + "crash")) {
   message.channel.send("You crashed the program.");
 }
   if (message.content.startsWith(prefix + "Lon'quProfile")) {
    message.channel.sendMessage("", {
      file: "http://www.behindthevoiceactors.com/_img/chars/lonqu-fire-emblem-awakening-7.22.jpg"
    });
  } else
  if (message.content.startsWith(prefix + "Lon'cool")) {
    message.channel.sendMessage("", {
      file: "http://31.media.tumblr.com/6b636d4e1a906727fdd93925f6b5f5d8/tumblr_inline_nklf1qldpd1s43hy0.png"
    });
 } else
  if (message.content.startsWith(prefix + "God'qu")) {
    message.channel.sendMessage("", {
      file: "https://i.redd.it/puo9f4ftr3yy.png"
    });
 } else
  if (message.content.startsWith(prefix + "neku high")) {
    message.channel.sendMessage("", {
      file: "http://i.imgur.com/KWNhDQm.png"
    });
 } else
  if (message.content.startsWith(prefix + "giraffe")) {
    message.channel.sendMessage("", {
      file: "http://i.imgur.com/IRmBiLe.png"
    });
  } else
  if (message.content.startsWith(prefix + "ripchat")) {
    message.channel.sendMessage("", {
      file: "http://i.imgur.com/BBZxSoT.png"
    });
  } else
  if (message.content.startsWith(prefix + "farm'qu")) {
    message.channel.sendMessage("", {
      file: "http://i.imgur.com/8XQA7x2.png"
    });
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Introduce yourself, Lon'qu.")) {
    message.channel.send("I'm Lon'qu, a swordsman from Regna Ferox. And...that's all there is to know about me.");
  }
  if (message.content.startsWith("I like Lon'qu.")) {
    message.channel.send("Thank you! :)")
  }
 if (message.content.startsWith("I dislike Lon'qu.")) {
    message.channel.send("Shut up Liam.")
  }
 if (message.content.startsWith("Good job Lon'qu!")) {
   message.channel.send(":D")
 }
  if (message.content.startsWith("NO MORE NARCIAN")) {
    message.channel.send("I am Narcian - a Wyvern General of Bern. Do you wish to kneel before me? Or tremble in fear? Your choice.")
  }
 if (message.content.startsWith("<@!176929412304994304>")) {
   message.channel.send("That's Liam, the guy who likes Lon'qu.")
 }
 if (message.content.startsWith("<@339011111535771648>")) {
   message.channel.send("Hi, I'm Lon'qu. Did you need something?")
 }
 if (message.content.startsWith("<@!200076771268362250>")) {
   message.channel.send("That's Ryan, but most people here call him demon.")
 }
 if (message.content.startsWith("<@!296119821056081922>")) {
   message.channel.send("The man, the myth, the LEGEND!!")
 }
 if (message.content.startsWith("<@!291729793983053824>")) {
   message.channel.send("Narcian is a skrub against David.")
 }
 if (message.content.startsWith("I am Narcian - a Wyvern General of Bern. Do you wish to kneel before me? Or tremble in fear? Your choice.")) {
   message.channel.send("Shut up Narcian.")
 }
 if (message.content.startsWith("Thank you Lon'qu!")) {
   message.channel.send("You're welcome! :D")
 }
 if (message.content.startsWith("chop chop")) {
   message.channel.send("SHOVEL!")
 }
});