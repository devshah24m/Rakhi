const $=x=>document.getElementById(x);

/* ---------- Per-sister content ---------- */
const SISTERS={
  yashika:{
    name:"Yashika",
    hasGift:true,
    letter:[
      "I keep thinking about that stupid fight we had over the remote. I was so sure I was right. You were so sure you were right. We probably yelled about it for twenty minutes over something that meant nothing — and I'd give anything to have that twenty minutes back right now.",
      "Because here's what nobody tells you about growing up and moving away: you don't miss the big things. You miss the small, dumb, ordinary ones. I miss stealing your maggi when you weren't looking. I miss finding the chocolates you thought you'd hidden so well and eating them before you ever got the chance — and pretending I had no idea what you were talking about when you asked. I used to think I was just being annoying. Now I know I was just being close to you.",
      "Now you eat your maggi alone. Your chocolates stay exactly where you hid them. And I don't know why, but that makes me sadder than it should. I'd rather you catch me stealing your food every single day for the rest of my life than have you eat in peace, alone, in a house I'm not in.",
      "And then there's the MBA. You have no idea what it meant to have you behind me when I needed it — no conditions, no hesitation, just you, showing up. I don't think I've ever properly told you this: I think about that more than you'd guess. That kind of love doesn't get forgotten. It just quietly becomes part of who I am.",
      "So today, tying this rakhi from so far away, I just want you to know — the distance hasn't changed anything. You're still the person who'd fight with me over a remote and then give me everything I needed without a second thought. I miss you more than I know how to say."
    ],
    signoff:"No matter how many states are between us, you'll always be my sister."
  },
  riddhi:{
    name:"Riddhi",
    hasGift:true,
    letter:[
      "I don't know how to explain what those late nights meant to me. The ones where I'd call you over something small, and somehow it turned into me crying about a breakup at 2 AM, falling apart a little, and you — you just stayed. You didn't rush me off the phone. You just sat there in the dark with me, awake when you didn't have to be, when everyone else in my life had already said goodnight and moved on. People leave. I've learned that the hard way. But you never did.",
      "And then there's your pagalpan — your bachkandgiri that makes absolutely no sense and somehow makes everything better. I don't even remember half the things you did, I just remember how much we laughed, how light everything felt when you were around. Most people can't turn nothing into something worth remembering. You just do it without even trying.",
      "If I was ever the reason you felt hurt, even a little — I'm sorry. I mean that with my whole heart. I never wanted to be the source of anything but happiness for you, because you've only ever given that to me.",
      "Everyone warns you that cousins are supposed to be difficult, something you just put up with. But that was never us. You didn't just make this life easier — you made it feel like heaven to be alive in.",
      "I still think about Mahavir Nagar. Just us, wasting time, eating something we both knew wouldn't even fill our stomachs, not caring at all, just wanting to be near each other a little longer. Nothing about it was special. And somehow, that's exactly why it still means everything to me.",
      "And you're right — distance was never really the enemy. You're one text away, and that's always been enough to make every kilometre between us feel small."
    ],
    signoff:"No matter how many states are between us, you'll always be my sister. I love you, Riddhi. More than these words can hold."
  },
  bhakti:{
    name:"Bhakti",
    hasGift:true,
    letter:[
      "I know we don't meet much. I know we don't talk every day, and if someone asked, they'd probably say we're not \"that close.\" But closeness between siblings was never really about how often we talk. It's about the fact that no matter how much time passes, when we're together, nothing feels missing. That's rare, and it's something I don't take for granted.",
      "I still think about those boring evenings when all of us cousins would gang up on you, teasing you about everything and anything. You never flinched. You never got hurt or went quiet, you just took it, and somehow your comebacks made the whole room laugh harder than we were laughing at you. That's a rare quality — most people crack under that kind of teasing, but you always made the evening better because of it.",
      "What actually amazes me though, Bhakti, is watching you hold the family together almost single-handedly. Standing beside your mother, working, carrying responsibilities that would break most people — and still showing up, still being you. I don't know where you find that strength. I don't think I could carry half of what you carry without falling apart somewhere along the way. That kind of quiet strength deserves to be said out loud, even if it rarely is.",
      "I know I'll probably never say any of this to your face — some things are just easier to write than to say directly. But I wanted you to know this is what I genuinely feel for you as my sister, even if I don't show it often enough."
    ],
    signoff:"No matter how many states are between us, you'll always be my sister, and I'm proud to call you that."
  },
  shraddha:{
    name:"Shraddha",
    hasGift:false,
    letter:[
      "I won't pretend I know you as much as I know the others. We haven't had those long conversations or shared the same kind of closeness. But even from a distance, one thing has always been clear to me — you're one of the strongest girls I've ever known. Handling your own home and your husband's home, both, with the kind of grace that makes it look effortless when I know it isn't.",
      "Since I was a kid, I've heard your name used as the example — \"be like her,\" \"study hard,\" \"do something with your life.\" Haa, woh kabhi mujhse hua nahi, and honestly, agar hojata toh shayad main abhi kahin aur hota. But that's alright. It doesn't take away from the fact that you were, and still are, someone I could actually learn from. Not just in what you've achieved, but in how you carry yourself while doing it.",
      "I know I don't say this kind of thing often, and I know we're not the closest, but that doesn't mean I don't see you or appreciate who you are.",
      "And okay, ek chhoti si request bhi hai saath mein — thoda acha ashirvaad de dena ke Mumbai mein job lag jaaye. Kam se kam agle Rakshabandhan itna sab plan nahi karna padega."
    ],
    signoff:"No matter how many states are between us, you'll always be my sister."
  }
};
let currentSister=null;

/* ---------- Story steps ---------- */
let step=1;
function story(n){document.querySelectorAll(".story").forEach(x=>x.classList.remove("active"));document.querySelector(`.story[data-step="${n}"]`).classList.add("active");step=n}
document.querySelectorAll(".go").forEach(b=>b.addEventListener("click",()=>story(Math.min(6,step+1))));

for(let i=0;i<32;i++){let e=document.createElement("span");e.textContent=i%2?"✦":"·";e.style.position="absolute";e.style.left=Math.random()*100+"%";e.style.top=Math.random()*100+"%";e.style.color="#ffd6dc";e.style.opacity=.18+Math.random()*.4;e.style.fontSize=7+Math.random()*11+"px";e.style.animation=`drift ${5+Math.random()*8}s ease-in-out infinite`;e.style.animationDelay=Math.random()*5+"s";$("floaters").appendChild(e)}

/* ---------- Direct link routing (?to=name) ---------- */
/* Each sister gets her own link, e.g. yoursite.com/?to=riddhi
   That link skips the chooser entirely and opens straight into
   her own story + her own letter — she never sees the picker
   or the other names. */
const params=new URLSearchParams(location.search);
const directKey=(params.get("to")||"").toLowerCase();

function loadSister(sister){
  currentSister=sister;
  $("sceneSisterName").textContent=sister.name;
  $("letterName").textContent=sister.name;
  $("letterBody").innerHTML=sister.letter.map(p=>`<p>${p}</p>`).join("")+`<div class="letterSign">${sister.signoff}<br><b>— Dev</b></div>`;
  if($("nameInput"))$("nameInput").value=sister.name;
}

if(directKey&&SISTERS[directKey]){
  loadSister(SISTERS[directKey]);
  $("chooser").classList.remove("active");
  story(1);
}

/* ---------- Chooser (fallback if no ?to= link was used) ---------- */
document.querySelectorAll(".chooserBtn").forEach(b=>b.addEventListener("click",()=>{
  loadSister(SISTERS[b.dataset.sister]);
  $("chooser").classList.remove("active");
  story(1);
}));

/* ---------- Letter reveal -> Gift or Blessing branch ---------- */
$("toLetter").onclick=()=>{document.querySelector('[data-step="6"]').classList.remove("active");$("letterPage").classList.add("active")};
$("toGift").onclick=()=>{
  $("letterPage").classList.remove("active");
  if(currentSister.hasGift){$("giftPage").classList.add("active");render()}
  else{$("blessingPage").classList.add("active")}
};

/* ---------- Chocolate gift flow (Yashika, Riddhi, Bhakti) ---------- */
const products=[["silk","Dairy Milk Silk",99,"🍫"],["kitkat","KitKat",29,"🍫"],["snickers","Snickers",34,"🥜"],["twix","Twix",72,"🍫"],["ferrero","Ferrero Rocher",163,"🍫"],["5star","5 Star",30,"⭐"],["perk","Perk",20,"🍫"],["kinder","Kinder Joy",50,"🥚"]];
let cart=[];
function total(){return cart.reduce((s,x)=>s+x.price*x.qty,0)}
function render(){ $("products").innerHTML=products.map(p=>{let q=cart.find(x=>x.id===p[0])?.qty||0;let allowed=cart.length<2&&total()+p[2]<=200;return `<article class="product ${q?'selected':''}"><div class="ico">${p[3]}</div><h3>${p[1]}</h3><p>${q?'Selected':'A little favourite for you.'}</p><button data-id="${p[0]}" ${allowed?'':'disabled'}>${q?'Selected ✓':'Choose this'}</button></article>`}).join("");document.querySelectorAll(".product button").forEach(b=>b.onclick=()=>{let p=products.find(x=>x[0]===b.dataset.id);if(cart.length>=2||total()+p[2]>200)return;cart.push({id:p[0],name:p[1],price:p[2],qty:1});render()});$("cartText").textContent=cart.length?cart.map(x=>x.name).join(" + "):"Choose up to two";$("checkout").disabled=cart.length!==2;$("chosen").textContent=cart.map(x=>x.name).join(" + ")}
$("checkout").onclick=()=>{$("giftPage").classList.remove("active");$("formPage").classList.add("active");render()};
$("orderForm").onsubmit=async e=>{
  e.preventDefault();
  if(cart.length!==2||total()>200)return;
  let f=new FormData(e.target),payload={type:"order",sister:currentSister.name,name:f.get("name"),phone:f.get("phone"),address:f.get("address"),city:f.get("city"),state:f.get("state"),pin:f.get("pin"),chocolates:cart.map(x=>({id:x.id,qty:1}))};
  $("send").disabled=true;$("send").textContent="Sending…";
  try{
    let r=await fetch("/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
    let j=await r.json();
    if(!r.ok)throw Error(j.error);
    $("doneSmall").textContent="SURPRISE CONFIRMED";
    $("doneHeading").innerHTML="Your little piece<br>of <em>home</em> is coming.";
    $("doneBody").textContent="Dev has received your choices.";
    $("doneSisterName").textContent=currentSister.name;
    $("formPage").classList.remove("active");$("done").classList.add("active")
  }catch(err){
    alert("Couldn't send the surprise. Please try again.");
    $("send").disabled=false;$("send").textContent="Send my surprise ♥"
  }
};

/* ---------- Blessing-only flow (Shraddha) ---------- */
$("blessingFormEl").onsubmit=async e=>{
  e.preventDefault();
  let f=new FormData(e.target),payload={type:"blessing",sister:currentSister.name,message:f.get("blessing")};
  $("sendBlessing").disabled=true;$("sendBlessing").textContent="Sending…";
  try{
    let r=await fetch("/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
    let j=await r.json();
    if(!r.ok)throw Error(j.error);
    $("doneSmall").textContent="BLESSING RECEIVED";
    $("doneHeading").innerHTML="Your <em>ashirwaad</em><br>reached him.";
    $("doneBody").textContent="Dev has received your words.";
    $("doneSisterName").textContent=currentSister.name;
    $("blessingPage").classList.remove("active");$("done").classList.add("active")
  }catch(err){
    alert("Couldn't send your blessing. Please try again.");
    $("sendBlessing").disabled=false;$("sendBlessing").textContent="Send your blessing ♥"
  }
};
