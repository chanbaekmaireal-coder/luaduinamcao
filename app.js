/**
 * KỊCH BẢN TƯƠNG TÁC CHO WEBSITE: TRI THỨC NGHỀ DỆT ĐŨI NAM CAO
 * Tối ưu mượt mà, trực quan, thuần Việt và chuẩn xác theo yêu cầu người dùng.
 */

// Dữ liệu 10 công đoạn - 10 nhóm tri thức nghệ nhân
const STAGES_DATA = [
  {
    id: 1,
    title: "Trồng dâu",
    subtitle: "Tri thức quan sát tự nhiên và kinh nghiệm chọn lọc nguyên liệu",
    image: "./images/IMG_20261025_141724.jpg",
    content: "Quy trình bắt đầu từ khâu trồng dâu. Tri thức của nghệ nhân thể hiện ở khả năng đọc chất đất, thời tiết và nhận biết độ chín của lá dâu. Người thợ nắm rõ cách thu hoạch lá dâu sạch, bởi chỉ một sơ suất nhỏ khiến lá dâu nhiễm bẩn hay hóa chất thì toàn bộ lứa tằm sẽ bị bệnh và chết.",
    knowledgeHighlight: "Tri thức nhận biết thổ nhưỡng châu thổ sông Hồng và kinh nghiệm thu hái lá dâu nguyên bản đảm bảo nguồn thức ăn tinh khiết cho tằm.",
    artisanNote: "Lá dâu hái đúng cữ sương mai, khô ráo và không dính tạp chất mới tạo nên kén tơ óng vàng đạt chuẩn."
  },
  {
    id: 2,
    title: "Nuôi tằm",
    subtitle: "Tri thức sinh học và sự nhạy cảm với thời tiết",
    image: "./images/Screenshot_20261025_232252_YouTube.jpg",
    content: "Nuôi tằm đòi hỏi sự nhạy bén và tỉ mỉ trong việc cảm nhận sự thay đổi của nhiệt độ, độ ẩm. Nghệ nhân điều chỉnh lượng ăn và môi trường sống cho tằm theo từng chu kỳ phát triển. Tùy theo thời tiết, tằm sẽ nhả kén vàng hay kén trắng. Nếu không có kinh nghiệm căn chỉnh theo mùa, tằm sẽ bỏ ăn và không thể nhả kén.",
    knowledgeHighlight: "Tri thức sinh học bản địa giúp nghệ nhân cảm nhận cữ ăn, nhịp ngủ và nhiệt độ không khí để tằm đóng kén đều đặn.",
    artisanNote: "Tằm ăn rỗi là lúc người thợ thức trắng đêm canh tằm, giữ nhiệt độ buồng nuôi luôn ổn định và ấm áp."
  },
  {
    id: 3,
    title: "Kéo sợi",
    subtitle: "Tri thức cơ thể và cảm quan xúc giác nghệ nhân",
    image: "./images/IMG_20261009_105923.jpg",
    content: "Đây là công đoạn tập trung rõ nhất tri thức độc bản của nghệ nhân Nam Cao. Kéo sợi không có máy móc nào thay thế hoàn toàn được mà phụ thuộc vào cảm giác tay của các bà, các bác lớn tuổi. Nghệ nhân dùng sự tinh nhạy của đôi bàn tay để miết, rút từng sợi tơ mộc từ kén và nối lại tức thì khi đứt. Lực kéo hoàn toàn dựa vào phản xạ cơ thể; nếu thiếu cảm quan này, sợi tơ sẽ bị chỗ to chỗ nhỏ, nổi cục và không thể đưa vào dệt.",
    knowledgeHighlight: "Đỉnh cao tri thức cơ thể tích lũy hàng chục năm trong lòng bàn tay người phụ nữ Nam Cao, điều chỉnh lực miết từng phần nghìn giây.",
    artisanNote: "Đôi tay ngâm trong nước ấm suốt hàng giờ, đầu ngón tay cảm nhận từng sợi tơ mỏng manh để se lại nhịp nhàng."
  },
  {
    id: 4,
    title: "Đánh ống",
    subtitle: "Tri thức điều khiển công cụ và duy trì độ căng",
    image: "./images/Screenshot_20261025_232358_YouTube.jpg",
    content: "Người thợ sử dụng guồng quay để cuốn sợi dũi đã kéo vào từng ống tơ. Tri thức ở đây là kỹ năng kiểm soát tốc độ quay và độ gạt đều tay nhằm giữ cho sợi tơ có độ căng ổn định, tránh bị rối hoặc đè chồng lên nhau gây đứt sợi khi xe.",
    knowledgeHighlight: "Kỹ năng điều phối nhịp quay cơ học kết hợp cảm giác độ nẩy của sợi tơ, tạo nên ống chỉ xếp lớp hoàn hảo.",
    artisanNote: "Nhịp guồng quay đều như hơi thở, tay gạt nhịp nhàng để từng lớp tơ nằm sát nhau mà không bao giờ chéo sợi."
  },
  {
    id: 5,
    title: "Xe sợi",
    subtitle: "Tri thức cảm nhận độ săn chắc của chất liệu",
    image: "./images/20261009_103552_1.jpg",
    content: "Khâu xe sợi đòi hỏi nghệ nhân phải cảm được độ xoắn vừa đủ của sợi tơ. Tri thức kinh nghiệm giúp người thợ biết khi nào sợi đã đạt độ dẻo dai và săn chắc tiêu chuẩn cho từng loại vải. Sợi thiếu độ xoắn sẽ bị bục, xù lông hoặc nhanh đứt trên khung cửi.",
    knowledgeHighlight: "Tri thức vật liệu định hình độ bền cấu trúc của tấm đũi, giúp sợi có độ dai dẻo chịu được lực đập của thoi dệt.",
    artisanNote: "Sợi xe non thì bở bục, xe quá tay thì quăn xoắn; chỉ có kinh nghiệm ngón tay miết mới biết điểm dừng chuẩn xác."
  },
  {
    id: 6,
    title: "Mắc cửi",
    subtitle: "Tri thức tính toán không gian và định hình khổ vải",
    image: "./images/Screenshot_20261025_232453_YouTube.jpg",
    content: "Mắc cửi là sự kết hợp giữa tri thức tính toán mật độ sợi và kinh nghiệm căn chỉnh lực kéo. Nghệ nhân phải bố trí dàn sợi dọc cân đối và đảm bảo độ căng đồng đều trên toàn bộ chiều rộng khung dệt. Sự lệch lạc trong cảm nhận độ căng sẽ khiến mặt vải dệt ra bị xô, chéo khổ hoặc rách.",
    knowledgeHighlight: "Kỹ năng hình học không gian dân gian và toán học trực quan trong việc phân bổ hàng ngàn sợi tơ dọc dài hàng chục mét.",
    artisanNote: "Hàng ngàn mối sợi mắc song song trên trục gỗ, mỗi sợi chịu lực đều như một để khổ vải thẳng tắp."
  },
  {
    id: 7,
    title: "Dệt đũi",
    subtitle: "Tri thức nhịp điệu và sự phối hợp giác quan",
    image: "./images/IMG_20261009_095324.jpg",
    content: "Nghệ nhân thể hiện sự điêu luyện qua sự phối hợp nhịp nhàng giữa tay nhịp thoi, chân đạp cửi và mắt quan sát mặt vải. Nhịp đập cửi tạo nên độ mộc mạc đặc trưng của đũi Nam Cao. Người thợ lành nghề chỉ cần nghe tiếng cửi hay nhìn thoáng qua là phát hiện ngay lỗi rơi mối sợi hay đường thoi lệch để xử lý kịp thời.",
    knowledgeHighlight: "Sự thăng hoa của phối hợp đa giác quan: mắt nhìn mật độ, tai lắng nghe nhịp thoi gỗ, tay phóng thoi và chân đạp cửi liên tục.",
    artisanNote: "Tiếng lách cách của khung cửi là giai điệu quen thuộc nuôi dưỡng tâm hồn người dân làng nghề qua hơn bốn thế kỷ."
  },
  {
    id: 8,
    title: "Nhuộm",
    subtitle: "Tri thức dân gian về thảo mộc và bí quyết màu sắc",
    image: "./images/IMG_20261009_111324.jpg",
    content: "Người thợ vận dụng tri thức dân gian truyền đời về các loại cây cỏ, củ nâu, quả mặc nưa... để tạo màu cho vải. Bí quyết nằm ở kỹ thuật pha chế, canh tỷ lệ và kiểm soát nhiệt độ nước nhuộm để màu thấm sâu, bền màu và an toàn cho da mà không làm xơ cứng sợi đũi.",
    knowledgeHighlight: "Hóa học thảo mộc truyền thống: kết hợp củ nâu, lá chàm, vỏ cây và nước phù sa để tạo nên bảng màu tự nhiên, lành tính.",
    artisanNote: "Vải đũi nhuộm thảo mộc mang hương cỏ cây thanh khiết, càng phơi nắng phù sa thì sắc màu càng đằm thắm."
  },
  {
    id: 9,
    title: "Thêu",
    subtitle: "Tri thức thẩm mỹ và bàn tay khéo léo",
    image: "./images/Screenshot_20261025_232806_YouTube.jpg",
    content: "Trên nền vải đũi mộc, nghệ nhân thực hiện các đường thêu tay tinh xảo. Tri thức thẩm mỹ giúp người thợ phối màu chỉ hài hòa, điều khiển nét kim mềm mại để tạo nên hoa văn sống động mà không làm co rút hay nhăn nhúm mặt vải.",
    knowledgeHighlight: "Cảm quan mỹ thuật dân gian kết hợp kỹ thuật thêu tay tỉ mỉ, tôn vinh họa tiết hoa sen, mây nước trên nền vải đũi.",
    artisanNote: "Mỗi mũi kim luồn qua sợi đũi thô đòi hỏi sự mềm mại tuyệt đối để sợi tơ không bị xước và cánh sen nở trọn vẹn."
  },
  {
    id: 10,
    title: "Hoàn thiện sản phẩm",
    subtitle: "Tri thức kiểm định và tiêu chuẩn nghề",
    image: "./images/20261009_090708.jpg",
    content: "Công đoạn cuối cùng đòi hỏi tri thức đánh giá chất lượng khắt khe của người thợ qua khâu giặt hấp, vô hồ và tỉa chỉ. Sự cẩn trọng ở bước này giúp loại bỏ những sản phẩm chưa đạt chuẩn, bảo vệ uy tín và giá trị thương hiệu của làng nghề.",
    knowledgeHighlight: "Quy chuẩn nghiệm thu sản phẩm thủ công nghiêm ngặt, giữ trọn nét thô mộc đặc trưng nhưng êm ái khi chạm vào da.",
    artisanNote: "Một tấm vải đũi đạt chuẩn là khi chạm vào thấy mát nhẹ, vò trên tay thấy mềm xốp và giữ được trọn vẹn hồn cốt làng nghề."
  }
];

// Trạng thái hiện tại
let currentStageIndex = 0;

// Khởi tạo sự kiện DOM
document.addEventListener("DOMContentLoaded", () => {
  initSilkCanvas();
  renderJourneyNodes();
  initComparisonSlider();
  initGuestbook();
  initScrollReveal();
  initNavbarScrollSpy();
  initMobileMenu();
});

// Hiệu ứng dải lụa & sợi đũi chuyển động mềm mại trên nền trang chủ
function initSilkCanvas() {
  const canvas = document.getElementById("silkCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;

  function resize() {
    if (!canvas.parentElement) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener("resize", resize);

  let t = 0;

  // Cấu hình các sợi đũi lượn sóng
  const threads = [
    { yRatio: 0.16, amp: 26, freq: 0.0022, speed: 0.007, color: "rgba(196, 151, 70, 0.45)", width: 1.5 },
    { yRatio: 0.26, amp: 40, freq: 0.0018, speed: 0.005, color: "rgba(229, 195, 120, 0.55)", width: 2.2 },
    { yRatio: 0.40, amp: 34, freq: 0.0025, speed: 0.006, color: "rgba(139, 101, 76, 0.32)", width: 1.2 },
    { yRatio: 0.56, amp: 46, freq: 0.0016, speed: 0.004, color: "rgba(196, 151, 70, 0.4)", width: 2.0 },
    { yRatio: 0.70, amp: 30, freq: 0.0020, speed: 0.008, color: "rgba(184, 134, 59, 0.35)", width: 1.6 },
    { yRatio: 0.84, amp: 36, freq: 0.0024, speed: 0.005, color: "rgba(196, 151, 70, 0.28)", width: 1.4 }
  ];

  // Các dải lụa ribbon mềm mại uốn lượn
  const ribbons = [
    { yRatio: 0.30, widthBand: 26, amp: 36, freq: 0.0015, speed: 0.0045, fill: "rgba(244, 232, 209, 0.4)", stroke: "rgba(196, 151, 70, 0.35)" },
    { yRatio: 0.62, widthBand: 32, amp: 42, freq: 0.0012, speed: 0.0035, fill: "rgba(229, 195, 120, 0.22)", stroke: "rgba(196, 151, 70, 0.28)" }
  ];

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. Vẽ các dải lụa ribbon
    ribbons.forEach((r) => {
      const baseY = height * r.yRatio;
      ctx.beginPath();

      // Mép trên
      for (let x = 0; x <= width; x += 15) {
        const y = baseY + 
          Math.sin(x * r.freq + t * r.speed) * r.amp +
          Math.cos(x * r.freq * 0.6 + t * r.speed * 0.8) * (r.amp * 0.3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // Mép dưới
      for (let x = width; x >= 0; x -= 15) {
        const y = baseY + r.widthBand + 
          Math.sin(x * r.freq + t * r.speed + 0.35) * r.amp +
          Math.cos(x * r.freq * 0.6 + t * r.speed * 0.8 + 0.2) * (r.amp * 0.3);
        ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.fillStyle = r.fill;
      ctx.fill();
      ctx.strokeStyle = r.stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // 2. Vẽ từng sợi tơ đũi uốn lượn
    threads.forEach((th) => {
      const baseY = height * th.yRatio;
      ctx.beginPath();

      for (let x = 0; x <= width; x += 10) {
        const y = baseY + 
          Math.sin(x * th.freq + t * th.speed) * th.amp +
          Math.cos(x * th.freq * 0.5 + t * th.speed * 0.6) * (th.amp * 0.35);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = th.color;
      ctx.lineWidth = th.width;
      ctx.stroke();
    });

    t += 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// Render duy nhất 10 điểm mốc trên hành trình sợi đũi (xuất hiện đúng 1 lần)
function renderJourneyNodes() {
  const container = document.getElementById("journeyNodesContainer");
  if (!container) return;

  container.innerHTML = "";

  STAGES_DATA.forEach((stage, index) => {
    const nodeCard = document.createElement("div");
    nodeCard.className = "flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2";
    nodeCard.onclick = () => openStageModal(index);

    nodeCard.innerHTML = `
      <div class="relative mb-3">
        <!-- Vòng tròn số thứ tự -->
        <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#5C4033] text-[#FAF6EE] flex items-center justify-center font-heritage text-xl md:text-2xl font-bold shadow-md border-2 border-[#C49746] transition-all duration-300 group-hover:bg-[#C49746] group-hover:scale-110">
          ${stage.id}
        </div>
        <!-- Vòng pulse nhỏ khi rê chuột -->
        <div class="absolute inset-0 rounded-full border border-[#C49746] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none"></div>
      </div>

      <!-- Ảnh minh họa nhỏ chuẩn từng công đoạn -->
      <div class="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-[#E2D5C3] shadow-sm mb-2 bg-[#F4E8D1] transition-transform duration-300 group-hover:shadow-md">
        <img src="${stage.image}" alt="${stage.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      </div>

      <!-- Tên công đoạn -->
      <div class="text-center px-1">
        <h4 class="font-heritage text-sm md:text-base font-semibold text-[#31231E] group-hover:text-[#8C2D19] transition-colors leading-tight">
          ${stage.title}
        </h4>
        <span class="text-[11px] text-[#6B5549] block mt-0.5">Bấm xem chi tiết</span>
      </div>
    `;

    container.appendChild(nodeCard);
  });
}

// Mở modal chi tiết công đoạn
function openStageModal(index) {
  currentStageIndex = index;
  const stage = STAGES_DATA[index];
  const modal = document.getElementById("stageModal");
  if (!modal) return;

  document.getElementById("modalStageNumber").innerText = `CÔNG ĐOẠN ${stage.id < 10 ? "0" + stage.id : stage.id} / 10`;
  document.getElementById("modalStageTitle").innerText = `${stage.id}. ${stage.title}`;
  document.getElementById("modalStageSubtitle").innerText = stage.subtitle;
  document.getElementById("modalStageImage").src = stage.image;
  document.getElementById("modalStageContent").innerText = stage.content;
  document.getElementById("modalStageHighlight").innerText = stage.knowledgeHighlight;
  document.getElementById("modalStageNote").innerText = stage.artisanNote;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// Đóng modal và cuộn đúng về mục hành trình sợi đũi
function closeStageModal() {
  const modal = document.getElementById("stageModal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";

  // Cuộn mượt mà về lại khu vực hành trình sợi đũi
  const journeySection = document.getElementById("journey");
  if (journeySection) {
    journeySection.scrollIntoView({ behavior: "smooth" });
  }
}

// Chuyển công đoạn tiếp theo trong modal
function nextStage() {
  currentStageIndex = (currentStageIndex + 1) % STAGES_DATA.length;
  openStageModal(currentStageIndex);
}

// Quay lại công đoạn trước trong modal
function prevStage() {
  currentStageIndex = (currentStageIndex - 1 + STAGES_DATA.length) % STAGES_DATA.length;
  openStageModal(currentStageIndex);
}

// Lắng nghe phím tắt điều hướng trong modal
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("stageModal");
  const guestbookModal = document.getElementById("guestbookModal");

  if (modal && !modal.classList.contains("hidden")) {
    if (e.key === "Escape") closeStageModal();
    if (e.key === "ArrowRight") nextStage();
    if (e.key === "ArrowLeft") prevStage();
  } else if (guestbookModal && !guestbookModal.classList.contains("hidden")) {
    if (e.key === "Escape") closeGuestbookModal();
  }
});

// Slider so sánh chất vải bằng mắt thường
function initComparisonSlider() {
  const container = document.getElementById("comparisonSliderContainer");
  const slider = document.getElementById("comparisonSlider");
  const handle = document.getElementById("comparisonHandle");
  const topLayer = document.getElementById("comparisonTopLayer");

  if (!container || !slider || !handle || !topLayer) return;

  let isDragging = false;

  const updateSliderPosition = (x) => {
    const rect = container.getBoundingClientRect();
    let position = (x - rect.left) / rect.width;
    position = Math.max(0, Math.min(1, position));

    const percentage = position * 100;
    slider.style.left = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    topLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  };

  const startDrag = (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const stopDrag = () => {
    isDragging = false;
  };

  slider.addEventListener("mousedown", startDrag);
  handle.addEventListener("mousedown", startDrag);
  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDrag);

  slider.addEventListener("touchstart", startDrag, { passive: true });
  handle.addEventListener("touchstart", startDrag, { passive: true });
  window.addEventListener("touchmove", onDrag, { passive: true });
  window.addEventListener("touchend", stopDrag);

  container.addEventListener("click", (e) => {
    // Không kích hoạt lại nếu click vào handle khi đang drag
    if (e.target === handle || handle.contains(e.target)) return;
    updateSliderPosition(e.clientX || (e.touches && e.touches[0].clientX));
  });

  // Mặc định ở giữa 50%
  topLayer.style.clipPath = "inset(0 50% 0 0)";
}

// ==================== QUẢN LÝ SỔ LƯU NIỆM (GUESTBOOK) ====================
const INITIAL_GUESTBOOK_ENTRIES = [
  {
    author: "Nguyễn Hải Yến",
    role: "Sinh viên Đại học Quốc gia Hà Nội",
    date: "14/10/2026",
    content: "Được tận mắt chạm vào kén tằm và xem các cụ miết từng sợi đũi dưới bàn tay thoăn thoắt, em thực sự cảm phục lòng kiên trì và tài hoa của các nghệ nhân làng Nam Cao."
  },
  {
    author: "Trần Minh Quang",
    role: "Nghiên cứu sinh Văn hóa dân gian",
    date: "08/10/2026",
    content: "Giá trị của đũi Nam Cao không chỉ nằm ở từng thước vải mộc mạc thoáng mát, mà là cả một kho tàng tri thức cơ thể và ký ức lịch sử hơn bốn trăm năm qua bao thăng trầm."
  },
  {
    author: "Đỗ Mai Phương",
    role: "Nhà thiết kế thời trang bền vững",
    date: "29/09/2026",
    content: "Vải đũi nhuộm thảo mộc tự nhiên từ củ nâu, lá chàm của làng nghề mang sắc thái vô cùng sang trọng, thân thiện môi trường và truyền cảm hứng rất lớn cho thế hệ trẻ."
  }
];

function initGuestbook() {
  const listContainer = document.getElementById("guestbookList");
  if (!listContainer) return;

  let savedEntries = [];
  try {
    const raw = localStorage.getItem("namcao_guestbook_entries");
    if (raw) savedEntries = JSON.parse(raw);
  } catch (err) {
    console.error("Lỗi đọc sổ lưu niệm:", err);
  }

  const allEntries = [...INITIAL_GUESTBOOK_ENTRIES, ...savedEntries];
  renderGuestbookEntries(allEntries);

  const form = document.getElementById("guestbookForm");
  if (!form) return;

  form.onsubmit = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("guestName");
    const roleInput = document.getElementById("guestRole");
    const messageInput = document.getElementById("guestMessage");

    const name = nameInput.value.trim();
    const role = roleInput.value.trim() || "Người yêu di sản văn hóa";
    const content = messageInput.value.trim();

    if (!name || !content) return;

    const today = new Date();
    const dateStr = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`;

    const newEntry = {
      author: name,
      role: role,
      date: dateStr,
      content: content
    };

    savedEntries.unshift(newEntry);
    try {
      localStorage.setItem("namcao_guestbook_entries", JSON.stringify(savedEntries));
    } catch (err) {
      console.error("Lỗi lưu sổ lưu niệm:", err);
    }

    renderGuestbookEntries([...INITIAL_GUESTBOOK_ENTRIES, ...savedEntries]);
    form.reset();

    // Hiển thị thông báo cảm ơn
    const toast = document.getElementById("guestbookToast");
    if (toast) {
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 4000);
    }
  };
}

function renderGuestbookEntries(entries) {
  const container = document.getElementById("guestbookList");
  if (!container) return;

  container.innerHTML = "";

  entries.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "parchment-card p-5 rounded-xl border border-[#E2D5C3] shadow-sm relative";
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3 pb-2 border-b border-[#E2D5C3]/60">
        <div>
          <h5 class="font-heritage font-bold text-[#31231E] text-base">${entry.author}</h5>
          <span class="text-xs text-[#8C2D19] font-medium">${entry.role}</span>
        </div>
        <span class="text-xs text-[#6B5549] bg-[#F4E8D1] px-2.5 py-1 rounded-full">${entry.date}</span>
      </div>
      <p class="text-xs md:text-sm text-[#42281D] leading-relaxed italic">"${entry.content}"</p>
    `;
    container.appendChild(card);
  });
}

// Mở Modal Sổ lưu niệm
function openGuestbookModal() {
  const modal = document.getElementById("guestbookModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// Đóng Modal Sổ lưu niệm
function closeGuestbookModal() {
  const modal = document.getElementById("guestbookModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// Hiệu ứng cuộn mượt và xuất hiện (Scroll Reveal)
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => observer.observe(el));
}

// Highlight mục điều hướng theo vị trí cuộn
function initNavbarScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-[#8C2D19]", "font-bold");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("text-[#8C2D19]", "font-bold");
      }
    });
  });
}

// Menu di động
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMobileMenuBtn");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.onclick = () => {
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.onclick = closeMenu;
  mobileLinks.forEach((link) => (link.onclick = closeMenu));
}
