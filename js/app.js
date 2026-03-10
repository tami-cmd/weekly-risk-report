const students = [
  {
    name:"משה כהן",cls:"ח-1",score:14,risk:"danger",
    details:"ירידה בציונים +5 / 3 אירועי התנהגות +6 / 2 היעדרויות +3",
    ai:"משה מציג מספר אינדיקטורים הדורשים תשומת לב. נרשמה ירידה חדה בציונים במקביל לאירועי התנהגות. מומלץ לשוחח איתו בהקדם."
  },
  {
    name:"יעל שמיר",cls:"ח-1",score:11,risk:"danger",
    details:"ירידה בציונים +5 / 4 היעדרויות +4 / ציון מתחת 60 +3",
    ai:"יעל מציגה דפוס היעדרות גבוה בשלושת השבועות האחרונים, המלווה בירידה בציונים. מומלץ לבדוק את הנסיבות."
  },
  {
    name:"רחל לוי",cls:"ח-2",score:7,risk:"warning",
    details:"2 אירועי התנהגות +4 / 3 היעדרויות +3",
    ai:"רמת הנוכחות והציונים של רחל יציבה, אך נרשמו שני אירועי התנהגות קלים. כדאי לקיים שיחת משוב קצרה."
  },
  {
    name:"נועם ברק",cls:"ט-2",score:5,risk:"warning",
    details:"ירידה בציונים +5",
    ai:"נועם מציג ירידה מתונה בציונים, בעיקר במתמטיקה. נוכחות תקינה וללא אירועי התנהגות."
  },
  {
    name:"דניאל אברהם",cls:"ט-1",score:2,risk:"success",
    details:"היעדרות אחת +1 / אירוע התנהגות קל +1",
    ai:"דניאל מפגין פרופיל חיובי ויציב. הוא שומר על ממוצע ציונים של 92 ונוכחות מלאה."
  },
  {
    name:"שירה גולן",cls:"ח-2",score:1,risk:"success",
    details:"היעדרות אחת +1",
    ai:"שירה מפגינה ביצועים מעולים. ממוצע ציונים של 95 ונוכחות מלאה."
  }
];

const badgeMap = {
  danger:{cls:"badge-danger",text:"🔴 סיכון גבוה"},
  warning:{cls:"badge-warning",text:"🟡 לבדיקה"},
  success:{cls:"badge-success",text:"🟢 תקין"}
};

function renderTable(data){
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  data.forEach(s=>{
    const b = badgeMap[s.risk];
    const detailLines = s.details.split(" / ").map(d=>`<div>${d}</div>`).join("");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><a class="student-link" onclick="showLinkModal('${s.name}')">${s.name}</a></td>
      <td>${s.cls}</td>
      <td><span class="score-num">${s.score}</span></td>
      <td><div class="score-detail">${detailLines}</div></td>
      <td><span class="badge ${b.cls}">${b.text}</span></td>
      <td><div class="ai-box">${s.ai}</div></td>
    `;
    tbody.appendChild(tr);
  });
  document.getElementById("resultsCount").textContent = `מציג ${data.length} תלמידים`;
}

function filterTable(){
  const cf = document.getElementById("classFilter").value;
  const rf = document.getElementById("riskFilter").value;
  let filtered = students;
  if(cf!=="all") filtered = filtered.filter(s=>s.cls===cf);
  if(rf!=="all") filtered = filtered.filter(s=>s.risk===rf);
  renderTable(filtered);
}

function togglePanel(){
  const body = document.getElementById("panelBody");
  const btn = document.getElementById("toggleBtn");
  body.classList.toggle("hidden");
  btn.classList.toggle("open");
}

function showExportModal(){document.getElementById("exportModal").classList.add("active")}
function closeModal(){document.getElementById("exportModal").classList.remove("active")}
function showLinkModal(name){
  document.getElementById("linkModalText").textContent = `בגרסה המלאה, לחיצה על "${name}" תנווט ישירות לפרופיל התלמיד בפרויקט 5 — מסך פרופיל תלמיד.`;
  document.getElementById("linkModal").classList.add("active");
}
function closeLinkModal(){document.getElementById("linkModal").classList.remove("active")}

renderTable(students);
