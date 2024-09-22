let daysP = document.querySelector("div.Days > p.num");
let hoursP = document.querySelector("div.Hours > p.num");
let minutesP = document.querySelector("div.Minutes > p.num");
let secondsP = document.querySelector("div.Seconds > p.num");

let dateTarget = new Date("1 November 2024 23:00:00");
setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = dateTarget - dateNow;
  let DaysT = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let HoursT = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let MinutesT = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let SecondsT = Math.floor((dateDiff % (1000 * 60)) / 1000);
  daysP.innerHTML = DaysT;
  hoursP.innerHTML = HoursT;
  minutesP.innerHTML = MinutesT;
  secondsP.innerHTML = SecondsT;
}, 1000);



const tipsArray = [
  "النجاح يأتي من المثابرة والإصرار.",
  "التعلم هو الاستثمار الأفضل لمستقبلك.",
  "كل خطوة صغيرة تقربك من هدفك الكبير.",
  "الإيمان بنفسك هو أول خطوة لتحقيق النجاح.",
  "الجهد المستمر هو مفتاح النجاح.",
  "كل يوم هو فرصة جديدة للتقدم.",
  "المعرفة هي القوة، والتعلم هو الطريق إليها.",
  "العقبات هي مجرد تحديات تنتظرك لتتخطاها.",
  "أنت أقرب إلى النجاح مما تظن.",
  "العمل الجاد يجلب لك فرصًا لا تتخيلها.",
  "لا تستسلم، فإن الفشل هو جزء من الطريق إلى النجاح.",
  "عليك أن تثق بأن الأمور ستتحسن مع العمل المستمر.",
  "العقل الذي يستمر في التعلم لا يتقدم في العمر.",
  "التعلم يجعل من المستحيل ممكنًا.",
  "الطموح هو البداية، والإصرار هو السبيل.",
  "كلما اجتهدت أكثر، أصبحت أكثر حظًا.",
  "المثابرة تصنع المعجزات.",
  "كل تحدي تواجهه هو فرصة جديدة للتعلم.",
  "الإصرار يخلق الفرص.",
  "اعمل بجد الآن، وكن فخورًا بنفسك لاحقًا.",
  "لا حدود لما يمكنك تحقيقه إذا واصلت السعي.",
  "تعلم اليوم، لتكون أفضل غدًا.",
  "لا تنتظر الفرص، اصنعها بنفسك.",
  "الأمل موجود دائمًا طالما كنت مستمرًا في المحاولة.",
  "كل محاولة تقترب بك خطوة من هدفك.",
  "النجاح ليس نهاية المطاف، إنه مجرد بداية.",
  "استثمر في نفسك، فأنت أكبر أصولك.",
  "استمر في التقدم، مهما كانت الصعوبات.",
  "العزيمة القوية تقودك دائمًا إلى النجاح.",
  "التعلم رحلة لا نهاية لها.",
  "بالتعلم المستمر، تحقق أحلامك.",
  "الفشل هو مجرد درس في الطريق إلى النجاح.",
  "كل يوم تلتزم فيه بتحقيق أهدافك هو خطوة نحو النجاح.",
  "الأحلام تتحقق بالعمل الجاد والمثابرة.",
  "ثق بأن النجاح يحتاج إلى وقت وصبر.",
  "المعرفة تفتح لك أبوابًا جديدة.",
  "تطوير الذات هو مفتاح النجاح المستمر.",
  "كل يوم جديد هو فرصة لتصبح أفضل.",
  "العقبات تجعل النجاح أكثر قيمة.",
  "تعلم شيئًا جديدًا كل يوم."
];

let tip=document.querySelector('.tip')
tip.innerHTML=tipsArray[Math.floor(Math.random() * tipsArray.length)];