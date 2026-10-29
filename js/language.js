const vi = new Map(Object.entries({
  "ENTER IF YOU DARE": "BƯỚC VÀO NẾU BẠN DÁM",
  "A GOTHIC HALLOWEEN EXPERIENCE": "TRẢI NGHIỆM HALLOWEEN GOTHIC",
  "Cart ": "Giỏ hàng ",
  "Open shopping cart": "Mở giỏ hàng",
  "THE NIGHT IS YOUNG": "ĐÊM VẪN CÒN DÀI",
  "A little ": "Một chút ", "macabre.": "rùng rợn.", "A whole lot of ": "Và thật nhiều ", "magic.": "phép màu.",
  "The gates are open. Explore the haunted shop, test your instincts, and uncover secrets hidden in the Halloween night.": "Cánh cổng đã mở. Khám phá cửa hàng ma ám, thử thách bản năng và tìm những bí mật ẩn giấu trong đêm Halloween.",
  "Explore the world ": "Khám phá thế giới ", "Play the games ": "Chơi trò chơi ",
  "A strange and wondrous night awaits.": "Một đêm kỳ lạ và diệu kỳ đang chờ bạn.",
  "SCROLL TO DISCOVER": "CUỘN XUỐNG ĐỂ KHÁM PHÁ",
  "SPOOKY CATEGORIES": "DANH MỤC MA MỊ", "Choose your": "Chọn", "spooky world": "thế giới ma quái của bạn",
  "Decor": "Trang trí", "Toys": "Đồ chơi", "Accessories": "Phụ kiện",
  "Glowing pumpkins and eerie relics to light up the night.": "Bí ngô phát sáng và cổ vật kỳ bí thắp sáng màn đêm.",
  "Ghostly companions for the most haunted home.": "Những người bạn ma quái cho ngôi nhà huyền bí.",
  "Witch hats and costume accessories for your midnight transformation.": "Mũ phù thủy và phụ kiện hóa trang cho màn biến hóa lúc nửa đêm.",
  "WELCOME, LITTLE STRANGER": "CHÀO MỪNG, VỊ KHÁCH LẠ NHỎ BÉ",
  "More than one night.": "Không chỉ là một đêm.", "A world of its own.": "Mà là cả một thế giới.",
  "Every dark corner holds a story. Every door leads to the unexpected.": "Mỗi góc tối đều ẩn chứa một câu chuyện. Mỗi cánh cửa dẫn đến điều bất ngờ.",
  "Welcome to": "Chào mừng đến", "the haunted night": "đêm huyền bí",
  "Halloween falls on October 31. Wander the streets with friends, go trick-or-treating, and celebrate beneath the full moon.": "Halloween diễn ra vào ngày 31 tháng 10. Dạo phố cùng bạn bè, đi xin kẹo và ăn mừng dưới ánh trăng tròn.",
  "Explore": "Khám phá", "Mystery": "Bí ẩn", "Create": "Sáng tạo", "Learn": "Học hỏi",
  "Wander through mysterious corners and uncover stories hidden in the mist.": "Dạo bước qua những góc bí ẩn và khám phá câu chuyện ẩn trong màn sương.",
  "Collect clues, solve puzzles, and see where your instincts lead.": "Thu thập manh mối, giải câu đố và xem trực giác dẫn lối bạn đến đâu.",
  "Find curious treasures to bring Halloween spirit into your space.": "Tìm những báu vật độc đáo để mang không khí Halloween vào không gian của bạn.",
  "Discover the festival’s origins and learn a few delightfully spooky words.": "Tìm hiểu nguồn gốc lễ hội và học thêm những từ vựng ma mị thú vị.",
  "THE HAUNTED SHOP": "CỬA HÀNG MA ÁM", "Claim a treasure.": "Sở hữu báu vật.", "Bring home the magic.": "Mang phép màu về nhà.",
  "Curiosities collected from the strangest corner of Halloween World. This is a demo catalog; real transactions are not available.": "Những món đồ kỳ lạ được sưu tầm từ góc bí ẩn nhất của Thế giới Halloween. Đây là danh mục minh họa, không hỗ trợ giao dịch thật.",
  "Search the haunted shop…": "Tìm trong cửa hàng ma ám…", "All": "Tất cả", "Gifts": "Quà tặng",
  "THE MIDNIGHT GAMES": "TRÒ CHƠI NỬA ĐÊM", "Bring a little courage.": "Hãy mang theo chút can đảm.", "Keep your curiosity.": "Giữ lại sự tò mò.",
  "Two strange experiences for curious souls. No downloads required — just step inside.": "Hai trải nghiệm kỳ lạ dành cho những tâm hồn tò mò. Không cần tải xuống — hãy bước vào ngay.",
  "PERSONALITY QUIZ": "TRẮC NGHIỆM TÍNH CÁCH", "5 QUESTIONS": "5 CÂU HỎI", "Halloween Fate": "Định mệnh Halloween",
  "The midnight mirror will reveal which Halloween spirit is hiding within you.": "Tấm gương nửa đêm sẽ tiết lộ linh hồn Halloween nào đang ẩn giấu bên trong bạn.",
  "Reveal your fate": "Khám phá định mệnh", "DETECTIVE STORY": "CÂU CHUYỆN TRINH THÁM", "3+ CLUES": "3+ MANH MỐI",
  "Haunted Mystery": "Bí ẩn ma ám", "A silver moon pendant vanished at midnight. Can you discover who took it?": "Mặt dây chuyền trăng bạc biến mất lúc nửa đêm. Bạn có tìm ra kẻ đã lấy nó không?", "Solve the mystery": "Giải mã bí ẩn",
  "YOUR MIDNIGHT CLASSROOM": "LỚP HỌC NỬA ĐÊM", "HALLOWEEN ": "HALLOWEEN ", "ACADEMY": "HỌC VIỆN",
  "Three ways to explore: discover the origins, build your vocabulary, and test your knowledge. Learn at your own pace.": "Ba cách khám phá: tìm hiểu nguồn gốc, trau dồi từ vựng và kiểm tra kiến thức. Hãy học theo nhịp độ của bạn.",
  "Origins": "Nguồn gốc", "Vocabulary": "Từ vựng", "Challenge": "Thử thách",
  "CHAPTER ONE": "CHƯƠNG MỘT", "Where did Halloween begin?": "Halloween bắt nguồn từ đâu?",
  "Halloween is connected to the ancient Celtic festival of Samhain, which marked the seasonal transition into winter. Over centuries, local customs, Christian traditions, and popular culture shaped the modern celebration.": "Halloween gắn liền với lễ hội Samhain cổ xưa của người Celt, đánh dấu thời khắc chuyển mùa sang đông. Qua nhiều thế kỷ, phong tục địa phương, truyền thống Kitô giáo và văn hóa đại chúng đã định hình lễ hội ngày nay.",
  "Read the history notes ": "Đọc ghi chú lịch sử ", "WORD SPELLS": "TỪ NGỮ MA THUẬT", "Spellbinding vocabulary": "Từ vựng mê hoặc",
  "Explore 12 useful Halloween words with definitions and example sentences.": "Khám phá 12 từ Halloween hữu ích cùng định nghĩa và câu ví dụ.", "Search words or definitions…": "Tìm từ hoặc định nghĩa…", "Search Halloween vocabulary": "Tìm từ vựng Halloween",
  "FINAL CHALLENGE": "THỬ THÁCH CUỐI", "Test your knowledge": "Kiểm tra kiến thức", "Twelve quick questions — how much do you know about Halloween?": "Mười hai câu hỏi nhanh — bạn biết gì về Halloween?", "questions\n                await": "câu hỏi\n                đang chờ", "Start the quiz": "Bắt đầu trắc nghiệm",
  "THE PARTY": "BỮA TIỆC", "Halloween Party": "Tiệc Halloween", "October 31": "Ngày 31 tháng 10", "Throw a spectacular party and enjoy the spookiest night of the year with friends.": "Tổ chức một bữa tiệc tuyệt vời và tận hưởng đêm kỳ bí nhất năm bên bạn bè.", "Start the party ": "Bắt đầu tiệc ",
  "A haunted little corner where curiosity comes alive.": "Góc nhỏ huyền bí nơi trí tò mò thức tỉnh.", "FRONTEND DEMO PROJECT": "DỰ ÁN MINH HỌA GIAO DIỆN", "Information": "Thông tin", "About this world": "Về thế giới này", "Contact: not configured": "Liên hệ: chưa thiết lập", "The Haunted Shop": "Cửa hàng ma ám", "Midnight Games": "Trò chơi nửa đêm", "Halloween Academy": "Học viện Halloween", "Back to top ↑": "Lên đầu trang ↑",
  "Skip to content": "Bỏ qua đến nội dung", "Cart": "Giỏ hàng", "Decor": "Trang trí", "Witch hats": "Mũ phù thủy"
}));

vi.set("Evidence Archive", "Kho hồ sơ chứng cứ");
vi.set("The file was closed.", "Hồ sơ đã được đóng lại.");
vi.set("It came back", "Nó quay lại và");
vi.set("open.", "mở.");
vi.set("The midnight archive is full of unverified photographs, missing relics, and", "Kho lưu trữ nửa đêm đầy ảnh chưa xác minh, di vật thất lạc và");
vi.set("stories that refuse to stay buried. Explore if you dare.", "những câu chuyện không chịu nằm yên. Hãy khám phá nếu bạn dám.");
vi.set("Open the archive", "Mở kho hồ sơ");
vi.set("RESTRICTED EVIDENCE · FILE 031", "HỒ SƠ MẬT · MỤC 031");
vi.set("Stories leave", "Những câu chuyện luôn để lại");
vi.set("something behind.", "một dấu vết.");
vi.set("Recovered objects, damaged keepsakes, and things that should have stayed in the dark. Open the archive", "Đồ vật được thu hồi, kỷ vật hư hại và những thứ đáng lẽ nên nằm trong bóng tối. Hãy mở kho hồ sơ");
vi.set("only if you want to see the full collection.", "chỉ khi bạn muốn xem toàn bộ bộ sưu tập.");
vi.set("UNVERIFIED", "CHƯA XÁC MINH");
vi.set("Open the evidence archive", "Mở kho hồ sơ chứng cứ");
vi.set("54 recovered items", "54 vật phẩm thu hồi");
vi.set("Inventory log: 54 items. Images load as you browse; nothing in this archive is authenticated.", "Nhật ký kiểm kê: 54 mục. Ảnh tải dần khi duyệt; chưa có vật phẩm nào được xác thực.");
vi.set("Reveal next 12 records", "Mở 12 hồ sơ tiếp theo");
vi.set("Discover more ", "Khám phá thêm ");
vi.set("A GOTHIC HALLOWEEN EXPERIENCE", "TRẢI NGHIỆM HALLOWEEN GOTHIC");
vi.set("THE HAUNTED SHOP", "CỬA HÀNG MA ÁM");
vi.set("Claim a treasure.", "Nhận lấy một báu vật.");
vi.set("Bring home the magic.", "Mang phép màu về nhà.");
vi.set("Curiosities collected from the strangest corner of Halloween World. This is a demo catalog; real transactions are not available.", "Những món đồ kỳ lạ được sưu tầm từ góc bí ẩn nhất của Thế giới Halloween. Đây là danh mục minh họa, không hỗ trợ giao dịch thật.");
vi.set("Search the haunted shop…", "Tìm trong cửa hàng ma ám…");
vi.set("Accessories", "Phụ kiện");
vi.set("Gifts", "Quà tặng");
vi.set("Details", "Chi tiết");
vi.set("+ Add", "+ Thêm");
vi.set("BESTSELLER", "BÁN CHẠY");
vi.set("GHOSTLY", "MA QUÁI");
vi.set("ACCESSORY", "PHỤ KIỆN");
vi.set("SMALL GIFT", "QUÀ NHỎ");
vi.set("UNUSUAL", "KỲ LẠ");
vi.set("COSTUME", "HÓA TRANG");
vi.set("MYSTERY", "BÍ ẨN");
vi.set("LIMITED", "GIỚI HẠN");
vi.set("SWEET DISPLAY", "TRANG TRÍ NGỌT NGÀO");
vi.set("PROP", "ĐẠO CỤ");
vi.set("SPOOKY", "RÙNG RỢN");
vi.set("Glowing Pumpkin Lantern", "Đèn lồng bí ngô phát sáng");
vi.set("A warm amber glow for an eerie Halloween corner.", "Ánh vàng ấm áp cho góc Halloween kỳ bí.");
vi.set("Ghost Lantern", "Đèn lồng ma trơi");
vi.set("A soft, ghostly companion for your desk or bedside table.", "Người bạn ma quái dịu dàng cho bàn làm việc hoặc đầu giường.");
vi.set("Moonlit Witch Hat", "Mũ phù thủy dưới trăng");
vi.set("A plum-bow accessory for your midnight transformation.", "Phụ kiện nơ mận cho màn biến hóa lúc nửa đêm.");
vi.set("Black Cat Keepsake", "Kỷ vật mèo đen");
vi.set("A tiny black cat for a touch of mysterious good luck.", "Chú mèo đen nhỏ mang đến chút may mắn bí ẩn.");
vi.set("Witch’s Potion Cauldron", "Vạc độc dược của phù thủy");
vi.set("A curious keepsake inspired by a witch’s bubbling potion.", "Món kỷ vật kỳ lạ lấy cảm hứng từ vạc thuốc sủi bọt của phù thủy.");
vi.set("Midnight Bat Mask", "Mặt nạ dơi nửa đêm");
vi.set("A dark costume accessory for a mysterious Halloween look.", "Phụ kiện hóa trang tối màu cho vẻ ngoài Halloween bí ẩn.");
vi.set("Mystery Relic Box", "Hộp cổ vật bí ẩn");
vi.set("A themed gift box filled with imagined Halloween curiosities.", "Hộp quà theo chủ đề với những món đồ Halloween kỳ lạ.");
vi.set("Midnight Grimoire", "Sách phép nửa đêm");
vi.set("A dark notebook for odd ideas, secret plans, and little spells.", "Cuốn sổ tối màu dành cho ý tưởng lạ, kế hoạch bí mật và bùa chú nhỏ.");
vi.set("Crimson Candle Relic", "Nến cổ vật đỏ thẫm");
vi.set("A dramatic crimson accent for your Halloween table display.", "Điểm nhấn đỏ thẫm nổi bật cho bàn tiệc Halloween.");
vi.set("Ancient Witch’s Broom", "Chổi phù thủy cổ xưa");
vi.set("A rustic decorative broom for a haunted room or photo set.", "Chiếc chổi trang trí mộc mạc cho căn phòng ma ám hoặc góc chụp ảnh.");
vi.set("Crimson-Eyed Spider", "Nhện mắt đỏ");
vi.set("A striking spider decoration for a genuinely haunted corner.", "Món trang trí hình nhện nổi bật cho góc phòng ma ám.");
vi.set("Your cart is empty", "Giỏ hàng đang trống");
vi.set("A curious little treasure is waiting for you.", "Một món đồ kỳ lạ đang chờ bạn.");
vi.set("Remove", "Xóa");
vi.set("Shopping Cart", "Giỏ hàng");
vi.set("Subtotal", "Tạm tính");
vi.set("Continue to demo checkout", "Tiếp tục thanh toán thử");
vi.set("Continue shopping", "Tiếp tục mua sắm");
vi.set("This is a demo cart. No real orders or payments are processed.", "Đây là giỏ hàng minh họa. Không có đơn hàng hay khoản thanh toán thật nào được xử lý.");
vi.set("Sample availability only. This demo does not represent real inventory.", "Thông tin hàng hóa chỉ để minh họa, không đại diện cho tồn kho thực tế.");
vi.set("Add to cart ", "Thêm vào giỏ hàng ");
vi.set("DEMO CHECKOUT", "THANH TOÁN THỬ");
vi.set("Ready to continue?", "Bạn muốn tiếp tục?");
vi.set("This is a UI demo only. There is no backend, order management, or payment gateway, so no order will be created and you will not be charged.", "Đây chỉ là bản minh họa giao diện. Không có hệ thống máy chủ, quản lý đơn hàng hay cổng thanh toán; đơn hàng sẽ không được tạo và bạn sẽ không bị tính phí.");
vi.set("Got it", "Đã hiểu");
vi.set("PERSONALITY QUIZ", "TRẮC NGHIỆM TÍNH CÁCH");
vi.set("5 QUESTIONS", "5 CÂU HỎI");
vi.set("Halloween Fate", "Định mệnh Halloween");
vi.set("The midnight mirror will reveal which Halloween spirit is hiding within you.", "Tấm gương nửa đêm sẽ tiết lộ linh hồn Halloween nào đang ẩn giấu bên trong bạn.");
vi.set("Reveal your fate", "Khám phá định mệnh");
vi.set("DETECTIVE STORY", "CÂU CHUYỆN TRINH THÁM");
vi.set("3+ CLUES", "3+ MANH MỐI");
vi.set("Haunted Mystery", "Bí ẩn ma ám");
vi.set("A silver moon pendant vanished at midnight. Can you discover who took it?", "Mặt dây chuyền trăng bạc biến mất lúc nửa đêm. Bạn có tìm ra kẻ đã lấy nó không?");
vi.set("Solve the mystery", "Giải mã bí ẩn");
vi.set("Halloween falls on October 31.", "Halloween diễn ra vào ngày 31 tháng 10.");
vi.set("Wander the streets with friends, go trick-or-treating, and celebrate beneath the full moon.", "Dạo phố cùng bạn bè, đi xin kẹo và ăn mừng dưới ánh trăng tròn.");
vi.set("CHAPTER ONE", "CHƯƠNG MỘT");
vi.set("Where did Halloween begin?", "Halloween bắt nguồn từ đâu?");
vi.set("Spellbinding vocabulary", "Từ vựng mê hoặc");
vi.set("Explore 12 useful Halloween words with definitions and example sentences.", "Khám phá 12 từ Halloween hữu ích cùng định nghĩa và câu ví dụ.");
vi.set("FINAL CHALLENGE", "THỬ THÁCH CUỐI");
vi.set("Test your knowledge", "Kiểm tra kiến thức");
vi.set("Start the quiz", "Bắt đầu trắc nghiệm");
vi.set("questions await", "câu hỏi đang chờ");
vi.set("Start the party ", "Bắt đầu bữa tiệc ");
vi.set("Throw a spectacular party and enjoy the spookiest night of the year with friends.", "Tổ chức bữa tiệc thật tuyệt và tận hưởng đêm kỳ bí nhất năm bên bạn bè.");
vi.set("Explore", "Khám phá");
vi.set("Create", "Sáng tạo");
vi.set("Enter the evidence archive", "Mở kho hồ sơ chứng cứ");
vi.set("Read the history notes ", "Đọc ghi chú lịch sử ");
vi.set("Collapse the notes ↑", "Thu gọn ghi chú ↑");
vi.set("SPELLBINDING VOCABULARY", "TỪ VỰNG MÊ HOẶC");
vi.set("Pumpkin", "Bí ngô");
vi.set("A large orange squash", "Một loại bí lớn thường có màu cam");
vi.set("The pumpkin is glowing.", "Quả bí ngô đang phát sáng.");
vi.set("Ghost", "Ma");
vi.set("A spirit of the dead", "Linh hồn của người đã khuất");
vi.set("A friendly ghost lives here.", "Một hồn ma thân thiện sống ở đây.");
vi.set("Witch", "Phù thủy");
vi.set("A person associated with magic", "Người gắn liền với phép thuật");
vi.set("The witch has a purple hat.", "Phù thủy đội chiếc mũ màu tím.");
vi.set("Haunted house", "Ngôi nhà ma ám");
vi.set("A house believed to contain ghosts", "Ngôi nhà được cho là có ma trú ngụ");
vi.set("We explored a haunted house.", "Chúng tôi khám phá một ngôi nhà ma ám.");
vi.set("Bat", "Dơi");
vi.set("A flying nocturnal mammal", "Động vật có vú biết bay và hoạt động về đêm");
vi.set("A bat flew across the moon.", "Một con dơi bay ngang qua mặt trăng.");
vi.set("Candle", "Nến");
vi.set("A wax light with a wick", "Nến sáp có tim bấc");
vi.set("Light a candle carefully.", "Hãy cẩn thận khi thắp nến.");
vi.set("Cauldron", "Cái vạc");
vi.set("A large pot used for brewing", "Chiếc nồi lớn dùng để nấu thuốc");
vi.set("The potion is in the cauldron.", "Thuốc phép ở trong chiếc vạc.");
vi.set("Skeleton", "Bộ xương");
vi.set("The framework of bones in a body", "Hệ thống xương tạo nên bộ khung cơ thể");
vi.set("The skeleton is dancing.", "Bộ xương đang nhảy múa.");
vi.set("Spell", "Bùa chú");
vi.set("Words believed to have magical power", "Những lời được tin là có sức mạnh phép thuật");
vi.set("She learned a new spell.", "Cô ấy học được một câu thần chú mới.");
vi.set("Costume", "Trang phục hóa trang");
vi.set("Clothing worn to look like someone else", "Quần áo mặc để hóa thân thành người khác");
vi.set("His costume looks spooky.", "Bộ đồ hóa trang của anh ấy trông thật rùng rợn.");
vi.set("Spider web", "Mạng nhện");
vi.set("A web spun by a spider", "Tấm lưới do nhện giăng");
vi.set("There is a spider web in the corner.", "Có một mạng nhện ở góc phòng.");
vi.set("Trick-or-treat", "Cho kẹo hay bị ghẹo");
vi.set("A Halloween custom of asking for candy", "Phong tục Halloween đi xin kẹo");
vi.set("Children go trick-or-treating.", "Trẻ em đi xin kẹo vào dịp Halloween.");
vi.set("Where did Halloween begin?", "Halloween bắt nguồn từ đâu?");
vi.set("Halloween is connected to the ancient Celtic festival of Samhain, which marked the seasonal transition into winter. Over centuries, local customs, Christian traditions, and popular culture shaped the modern celebration.", "Halloween gắn liền với lễ hội Samhain cổ xưa của người Celt, đánh dấu thời khắc chuyển mùa sang đông. Qua nhiều thế kỷ, phong tục địa phương, truyền thống Kitô giáo và văn hóa đại chúng đã định hình lễ hội ngày nay.");
vi.set("Samhain:", "Samhain:");
vi.set("an ancient Celtic festival in Ireland and Scotland marking the end of the harvest around October 31–November 1. Folklore held that the boundary between the living and the dead grew thin on this night.", "lễ hội cổ của người Celt ở Ireland và Scotland, đánh dấu mùa thu hoạch kết thúc vào khoảng ngày 31 tháng 10 đến ngày 1 tháng 11. Theo dân gian, ranh giới giữa người sống và người chết trở nên mong manh trong đêm ấy.");
vi.set("All Hallows’ Eve:", "Đêm vọng Lễ Các Thánh:");
vi.set("All Saints’ Day falls on November 1 in the Christian calendar; its eve became known as All Hallows’ Eve, later shortened to Halloween.", "Lễ Các Thánh diễn ra vào ngày 1 tháng 11 theo lịch Kitô giáo; đêm trước đó được gọi là All Hallows’ Eve, về sau rút gọn thành Halloween.");
vi.set("Jack-o’-lanterns:", "Đèn bí ngô:");
vi.set("in Ireland, early lanterns were carved from turnips. Immigrants brought the tradition to North America, where pumpkins became popular. Modern trick-or-treating spread in the United States and Canada during the 20th century.", "ở Ireland, những chiếc đèn lồng đầu tiên được khắc từ củ cải. Người nhập cư mang phong tục này đến Bắc Mỹ, nơi bí ngô trở nên phổ biến. Tục cho kẹo hay bị ghẹo lan rộng ở Mỹ và Canada trong thế kỷ 20.");
vi.set("Halloween’s history blends many traditions rather than stemming from a single, simple origin.", "Lịch sử Halloween hòa trộn nhiều truyền thống, chứ không bắt nguồn từ một câu chuyện đơn giản duy nhất.");
vi.set("No matching words found. Try another search.", "Không tìm thấy từ phù hợp. Hãy thử tìm kiếm khác.");
vi.set("View your results", "Xem kết quả");
vi.set("Next question →", "Câu tiếp theo →");
vi.set("Try again ↻", "Thử lại ↻");
vi.set("Review the lesson", "Ôn lại bài học");
vi.set("Correct!", "Chính xác!");
vi.set("Not quite.", "Chưa chính xác.");
vi.set("Halloween Historian", "Nhà sử học Halloween");
vi.set("Curious Explorer", "Nhà thám hiểm tò mò");
vi.set("Rookie Apprentice", "Tập sự mới vào nghề");
vi.set("Splendid work! You know plenty of fascinating details about Halloween history and customs.", "Tuyệt vời! Bạn biết rất nhiều điều thú vị về lịch sử và phong tục Halloween.");
vi.set("You have a good foundation. Review the questions you missed, then try again.", "Bạn đã có nền tảng tốt. Hãy xem lại những câu trả lời sai rồi thử lại nhé.");
vi.set("Every secret is worth discovering. Read the history notes and give the challenge another try.", "Bí mật nào cũng đáng khám phá. Hãy đọc ghi chú lịch sử rồi thử sức thêm lần nữa.");
vi.set("View your results", "Xem kết quả");
vi.set("THE PARTY", "BỮA TIỆC");
vi.set("Information", "Thông tin");
vi.set("Open shopping cart", "Mở giỏ hàng");
vi.set("Close shopping cart", "Đóng giỏ hàng");
vi.set("Close dialog", "Đóng hộp thoại");
vi.set("Search products", "Tìm sản phẩm");
vi.set("Search Halloween vocabulary", "Tìm từ vựng Halloween");
vi.set("Discover more ↗", "Khám phá thêm ↗");
vi.set("HALLOWEEN FATE", "ĐỊNH MỆNH HALLOWEEN");
vi.set("What will the midnight mirror reveal?", "Tấm gương nửa đêm sẽ tiết lộ điều gì?");
vi.set("Answer five playful questions to discover your Halloween archetype. This experience is for entertainment only.", "Trả lời năm câu hỏi vui để khám phá hình tượng Halloween của bạn. Trải nghiệm này chỉ nhằm mục đích giải trí.");
vi.set("Reveal my fate ↗", "Khám phá định mệnh ↗");
vi.set("YOUR HALLOWEEN ARCHETYPE", "HÌNH TƯỢNG HALLOWEEN CỦA BẠN");
vi.set("Pumpkin Guardian", "Người bảo hộ bí ngô");
vi.set("You are warm, dependable, and able to brighten even the darkest room. Your true power is kindness and quiet determination.", "Bạn ấm áp, đáng tin cậy và có thể thắp sáng cả căn phòng tối nhất. Sức mạnh thật sự của bạn là lòng tốt và ý chí bền bỉ.");
vi.set("Midnight Witch", "Phù thủy nửa đêm");
vi.set("Curiosity and imagination are your magic. You love finding answers and turning unusual ideas into something extraordinary.", "Trí tò mò và óc tưởng tượng là phép thuật của bạn. Bạn thích tìm lời giải và biến ý tưởng khác thường thành điều phi thường.");
vi.set("Ghost Wanderer", "Hồn ma phiêu du");
vi.set("You value freedom, trust your instincts, and never shy away from the unknown. Every journey holds a secret meant just for you.", "Bạn trân trọng tự do, tin vào trực giác và không né tránh điều chưa biết. Mỗi hành trình đều cất giữ một bí mật dành riêng cho bạn.");
vi.set("Black Cat Spirit", "Linh hồn mèo đen");
vi.set("Independent, observant, and refined, you notice details others miss. A touch of mystery makes you unforgettable.", "Độc lập, tinh ý và tao nhã, bạn nhận ra những chi tiết người khác bỏ qua. Một chút bí ẩn khiến bạn khó quên.");
vi.set("This result is based on your choices and is for entertainment only.", "Kết quả dựa trên lựa chọn của bạn và chỉ nhằm mục đích giải trí.");
vi.set("CASE FILE 013 · MIDNIGHT HOLLOW", "HỒ SƠ 013 · THUNG LŨNG NỬA ĐÊM");
vi.set("The Silver Moon Pendant", "Mặt dây chuyền Trăng Bạc");
vi.set("On Halloween night, the castle’s most precious pendant vanished from its display case just before midnight. Three guests each have a secret. Explore the rooms, gather clues, and make your deduction.", "Trong đêm Halloween, mặt dây chuyền quý giá nhất của lâu đài biến mất khỏi tủ kính ngay trước nửa đêm. Ba vị khách đều đang che giấu một bí mật. Hãy khám phá các căn phòng, thu thập manh mối và đưa ra suy luận.");
vi.set("Your mission: investigate at least three locations before accusing a suspect.", "Nhiệm vụ: điều tra ít nhất ba địa điểm trước khi buộc tội nghi phạm.");
vi.set("Begin the investigation ↗", "Bắt đầu điều tra ↗");
vi.set("INVESTIGATION", "ĐIỀU TRA");
vi.set("Explore the castle", "Khám phá lâu đài");
vi.set("Select a location to inspect the evidence. Clues found:", "Chọn địa điểm để kiểm tra chứng cứ. Manh mối đã tìm thấy:");
vi.set("The Grand Hall", "Đại sảnh");
vi.set("The clock stopped at 12:03. A streak in the dust beside the display case suggests someone opened it recently.", "Đồng hồ dừng lúc 12:03. Vệt bụi cạnh tủ kính cho thấy có người vừa mở tủ.");
vi.set("The East Corridor", "Hành lang phía Đông");
vi.set("Small silver-dusted footprints lead from the hall toward the music room, but there are no prints going back.", "Dấu chân nhỏ dính bụi bạc dẫn từ đại sảnh đến phòng nhạc, nhưng không có dấu chân quay lại.");
vi.set("The Music Room", "Phòng nhạc");
vi.set("A blue thread is caught near the piano pedal. A note on the stand reads: “The third melody opens the way to moonlight.”", "Sợi chỉ xanh mắc gần bàn đạp đàn piano. Tờ giấy trên giá nhạc ghi: “Giai điệu thứ ba mở lối đến ánh trăng.”");
vi.set("The Balcony", "Ban công");
vi.set("The balcony door is locked from the inside. Dust on the railing is undisturbed, so nobody used this route.", "Cửa ban công bị khóa từ bên trong. Bụi trên lan can vẫn nguyên vẹn, vậy nên không ai đi theo lối này.");
vi.set("Investigated", "Đã điều tra");
vi.set("Inspect location", "Kiểm tra địa điểm");
vi.set("You have enough clues to make a deduction. Keep exploring or choose a suspect.", "Bạn đã có đủ manh mối để suy luận. Hãy tiếp tục khám phá hoặc chọn nghi phạm.");
vi.set("Investigate at least three locations to unlock the final deduction.", "Hãy điều tra ít nhất ba địa điểm để mở khóa phần suy luận cuối.");
vi.set("Choose a suspect ↗", "Chọn nghi phạm ↗");
vi.set("THE FINAL DEDUCTION", "SUY LUẬN CUỐI CÙNG");
vi.set("Who took the pendant?", "Ai đã lấy mặt dây chuyền?");
vi.set("Use the evidence you collected: silver dust, a blue thread, and the untouched balcony door.", "Hãy dựa vào chứng cứ đã thu thập: bụi bạc, sợi chỉ xanh và cánh cửa ban công còn nguyên.");
vi.set("Mina — apprentice witch", "Mina — phù thủy tập sự");
vi.set("Mina has blue thread on her robe, but she was in the potion room when the pendant vanished. The thread makes her suspicious, but it is not enough to convict her.", "Áo choàng Mina có sợi chỉ xanh, nhưng cô ở phòng pha thuốc khi mặt dây chuyền biến mất. Sợi chỉ khiến cô đáng ngờ, nhưng chưa đủ để kết tội.");
vi.set("Pip — ghost musician", "Pip — hồn ma nhạc công");
vi.set("Pip left the silver-dusted footprints and a blue thread from his performance scarf. He borrowed the pendant as a prism for a moon melody and hid it in the piano — a foolish prank, not a real theft.", "Pip để lại dấu chân phủ bụi bạc và sợi chỉ xanh từ khăn biểu diễn. Cậu mượn mặt dây chuyền làm lăng kính cho khúc nhạc trăng rồi giấu trong đàn piano — một trò đùa dại dột, không phải vụ trộm thật.");
vi.set("Ink — the black cat", "Ink — mèo đen");
vi.set("Ink often naps by the window, but the balcony dust is untouched. The cat could not have crossed the corridor that way.", "Ink thường ngủ bên cửa sổ, nhưng lớp bụi trên ban công vẫn nguyên. Chú mèo không thể đi qua hành lang theo lối đó.");
vi.set("CASE CLOSED", "VỤ ÁN KHÉP LẠI");
vi.set("Case solved!", "Đã phá án!");
vi.set("An incorrect deduction", "Suy luận chưa chính xác");
vi.set("Investigation score:", "Điểm điều tra:");
vi.set("Play again ↻", "Chơi lại ↻");
vi.set("Case solved", "Đã phá án");
vi.set("A clue", "Manh mối");
vi.set("01 / EXPLORE", "01 / KHÁM PHÁ");
vi.set("02 / MYSTERY", "02 / BÍ ẨN");
vi.set("03 / CREATE", "03 / SÁNG TẠO");
vi.set("04 / LEARN", "04 / HỌC HỎI");
vi.set("Nothing lurks in this corner. Try another search term.", "Không có gì ẩn nấp ở đây. Hãy thử từ khóa khác.");
vi.set("YOUR HAUL", "ĐỒ BẠN ĐÃ CHỌN");
vi.set("Halloween World. Interactive demo.", "Thế giới Halloween. Bản minh họa tương tác.");
vi.set("SPOOKY CATEGORIES", "DANH MỤC MA MỊ");
vi.set("Learning path", "Lộ trình học tập");
vi.set("Learning path", "Lộ trình học tập");
vi.set("A Gothic Halloween relic", "Cổ vật Halloween Gothic");
vi.set("Halloween is connected to the ancient Celtic festival of Samhain, which marked the seasonal transition into winter. Over centuries, local customs, Christian traditions, and popular culture shaped the modern celebration.", "Halloween gắn liền với lễ hội Samhain cổ xưa của người Celt, đánh dấu thời khắc chuyển mùa sang đông. Qua nhiều thế kỷ, phong tục địa phương, truyền thống Kitô giáo và văn hóa đại chúng đã định hình lễ hội ngày nay.");
vi.set("HALLOWEEN FATE · QUESTION", "ĐỊNH MỆNH HALLOWEEN · CÂU HỎI");
vi.set("On Halloween night, where would you begin your adventure?", "Trong đêm Halloween, bạn sẽ bắt đầu chuyến phiêu lưu ở đâu?");
vi.set("A glowing pumpkin patch", "Cánh đồng bí ngô phát sáng");
vi.set("A magic tower on the hill", "Tòa tháp phép thuật trên đồi");
vi.set("A foggy, moonlit road", "Con đường mờ sương dưới trăng");
vi.set("A rooftop where black cats watch the moon", "Mái nhà nơi mèo đen ngắm trăng");
vi.set("Which enchanted item would you carry?", "Bạn sẽ mang theo món đồ phép thuật nào?");
vi.set("A carved pumpkin lantern", "Đèn lồng bí ngô chạm khắc");
vi.set("An ancient spellbook", "Cuốn sách phép cổ xưa");
vi.set("A bell that calls wandering spirits", "Chiếc chuông gọi các linh hồn phiêu bạt");
vi.set("A claw-shaped pendant", "Mặt dây chuyền hình móng vuốt");
vi.set("You hear a strange noise. What do you do?", "Bạn nghe thấy tiếng động lạ. Bạn sẽ làm gì?");
vi.set("Check whether a pumpkin has gone missing", "Kiểm tra xem có quả bí ngô nào biến mất không");
vi.set("Cast a protective spell", "Thi triển bùa chú bảo vệ");
vi.set("Quietly follow the sound", "Lặng lẽ đi theo âm thanh");
vi.set("Watch safely from a high place", "An toàn quan sát từ nơi cao");
vi.set("What would be your ideal Halloween gift?", "Món quà Halloween lý tưởng của bạn là gì?");
vi.set("Magical pumpkin seeds", "Hạt bí ngô phép thuật");
vi.set("A potion-making kit", "Bộ dụng cụ pha chế thuốc phép");
vi.set("An old book of ghost stories", "Cuốn truyện ma cũ");
vi.set("A sleek black cape", "Chiếc áo choàng đen thanh lịch");
vi.set("What would you like to be remembered for?", "Bạn muốn mọi người nhớ đến mình vì điều gì?");
vi.set("Always protecting your friends", "Luôn bảo vệ bạn bè");
vi.set("Creativity and wisdom", "Sự sáng tạo và trí tuệ");
vi.set("Freedom and unpredictability", "Sự tự do và khó đoán");
vi.set("Independence and elegance", "Tính độc lập và vẻ thanh lịch");
vi.set("Increase quantity of", "Tăng số lượng");
vi.set("Decrease quantity of", "Giảm số lượng");
vi.set("Remove ", "Xóa ");
vi.set("On what date is Halloween celebrated?", "Halloween được tổ chức vào ngày nào?");
vi.set("October 30", "Ngày 30 tháng 10");
vi.set("October 31", "Ngày 31 tháng 10");
vi.set("November 1", "Ngày 1 tháng 11");
vi.set("Halloween is celebrated on October 31, the eve of All Saints’ Day.", "Halloween được tổ chức vào ngày 31 tháng 10, đêm trước Lễ Các Thánh.");
vi.set("Which ancient people are associated with Samhain?", "Dân tộc cổ đại nào gắn liền với lễ Samhain?");
vi.set("The Celts", "Người Celt");
vi.set("The Aztecs", "Người Aztec");
vi.set("The Vikings", "Người Viking");
vi.set("Samhain was an ancient seasonal festival associated with Celtic communities.", "Samhain là lễ hội mùa vụ cổ xưa gắn liền với các cộng đồng Celt.");
vi.set("Which regions are most closely associated with the Celtic Samhain tradition?", "Những vùng nào gắn bó mật thiết nhất với truyền thống Samhain của người Celt?");
vi.set("Egypt", "Ai Cập");
vi.set("Ireland and Scotland", "Ireland và Scotland");
vi.set("Japan", "Nhật Bản");
vi.set("Historical accounts connect Samhain with Celtic traditions in Ireland and Scotland.", "Các ghi chép lịch sử liên hệ Samhain với truyền thống Celt ở Ireland và Scotland.");
vi.set("The word “Halloween” is shortened from which phrase?", "Từ “Halloween” được rút gọn từ cụm từ nào?");
vi.set("Hollow Evening", "Đêm rỗng");
vi.set("All Hallows’ Eve", "Đêm vọng Lễ Các Thánh");
vi.set("Hall of Wine", "Sảnh rượu vang");
vi.set("All Hallows’ Eve is the evening before All Saints’ Day.", "All Hallows’ Eve là đêm trước Lễ Các Thánh.");
vi.set("What were early Irish jack-o’-lanterns carved from?", "Đèn lồng Halloween đầu tiên ở Ireland được khắc từ gì?");
vi.set("Turnips", "Củ cải");
vi.set("Watermelons", "Dưa hấu");
vi.set("Carrots", "Cà rốt");
vi.set("Turnips were used in Ireland before pumpkins became popular in North America.", "Người Ireland dùng củ cải trước khi bí ngô trở nên phổ biến ở Bắc Mỹ.");
vi.set("What was one traditional reason for wearing disguises?", "Một lý do truyền thống để đeo mặt nạ là gì?");
vi.set("To enter a beauty contest", "Để tham gia cuộc thi sắc đẹp");
vi.set("To ward off spirits", "Để xua đuổi các linh hồn");
vi.set("To sell goods", "Để bán hàng");
vi.set("Some traditions held that disguises could hide people from or confuse spirits.", "Một số truyền thống cho rằng hóa trang có thể che giấu con người hoặc đánh lừa các linh hồn.");
vi.set("Who is “Stingy Jack” in Irish folklore?", "“Jack Keo Kiệt” trong truyện dân gian Ireland là ai?");
vi.set("A knight", "Một hiệp sĩ");
vi.set("A man who tricked the Devil", "Người đàn ông đã lừa Quỷ dữ");
vi.set("A witch", "Một phù thủy");
vi.set("In the legend, Jack tricks the Devil and is left wandering with a lantern.", "Trong truyền thuyết, Jack lừa Quỷ dữ rồi phải lang thang cùng chiếc đèn lồng.");
vi.set("Día de los Muertos (November 1–2) is primarily associated with which country?", "Día de los Muertos (ngày 1–2 tháng 11) chủ yếu gắn liền với quốc gia nào?");
vi.set("Mexico", "Mexico");
vi.set("The Netherlands", "Hà Lan");
vi.set("South Korea", "Hàn Quốc");
vi.set("Día de los Muertos is a Mexican tradition honoring deceased loved ones and is distinct from Halloween.", "Día de los Muertos là truyền thống Mexico tưởng nhớ người thân đã khuất và khác với Halloween.");
vi.set("What does the word “pumpkin” refer to?", "Từ “pumpkin” chỉ loại quả nào?");
vi.set("A pumpkin", "Quả bí ngô");
vi.set("A broom", "Cây chổi");
vi.set("A large, usually orange squash often carved for Halloween.", "Một loại bí lớn, thường có màu cam và hay được chạm khắc vào dịp Halloween.");
vi.set("What is a “haunted house”?", "“Ngôi nhà ma ám” là gì?");
vi.set("A greenhouse", "Nhà kính");
vi.set("A candy shop", "Cửa hàng kẹo");
vi.set("A haunted house is a place believed to be visited by ghosts or spirits.", "Nhà ma ám là nơi được cho là có ma hoặc linh hồn ghé thăm.");
vi.set("What is a Halloween “costume”?", "“Trang phục hóa trang” Halloween là gì?");
vi.set("A sweet", "Kẹo ngọt");
vi.set("An outfit or disguise", "Trang phục hoặc đồ cải trang");
vi.set("A curse", "Lời nguyền");
vi.set("A costume is clothing worn to represent a character, creature, or other identity.", "Trang phục hóa trang là quần áo dùng để hóa thân thành nhân vật, sinh vật hoặc hình tượng khác.");
vi.set("What activity is associated with “trick-or-treat”?", "Hoạt động nào gắn liền với tục “cho kẹo hay bị ghẹo”?");
vi.set("Children asking for candy", "Trẻ em đi xin kẹo");
vi.set("Releasing sky lanterns", "Thả đèn trời");
vi.set("Giving away pine trees", "Tặng cây thông");
vi.set("Children visit homes to ask for treats, traditionally with the playful phrase “trick or treat.”", "Trẻ em đến các nhà xin kẹo, thường nói câu đùa vui “cho kẹo hay bị ghẹo”.");
vi.set("A pumpkin is a large, usually orange squash often carved for Halloween.", "Bí ngô là loại quả lớn, thường có màu cam và hay được chạm khắc vào dịp Halloween.");
vi.set("12 words", "12 từ");

function translateText(value) {
  const key = value.trim().replace(/\s+/g, " ");
  if (vi.has(key)) return vi.get(key);
  let match = key.match(/^(\d+) of (\d+) words$/);
  if (match) return `${match[1]}/${match[2]} từ`;
  match = key.match(/^QUESTION (\d+)\/(\d+)$/i);
  if (match) return `CÂU HỎI ${match[1]}/${match[2]}`;
  match = key.match(/^HALLOWEEN FATE · QUESTION (\d+)\/5$/);
  if (match) return "ĐỊNH MỆNH HALLOWEEN · CÂU HỎI " + match[1] + "/5";
  match = key.match(/^Score: (\d+)$/);
  if (match) return `Điểm: ${match[1]}`;
  match = key.match(/^RECORD (\d+)$/);
  if (match) return `HỒ SƠ ${match[1]}`;
  match = key.match(/^Recovered item (\d+)$/);
  if (match) return `Mẫu vật thu hồi ${match[1]}`;
  match = key.match(/^(\d+)\/(\d+) correct$/);
  if (match) return `${match[1]}/${match[2]} câu đúng`;
  match = key.match(/^Correct! (.+)$/);
  if (match) return `Chính xác! ${translateText(match[1])}`;
  match = key.match(/^Not quite\. (.+)$/);
  if (match) return `Chưa chính xác. ${translateText(match[1])}`;
  match = key.match(/^(Decrease|Increase) quantity of (.+)$/);
  if (match) return (match[1] === "Decrease" ? "Giảm số lượng " : "Tăng số lượng ") + translateText(match[2]);
  match = key.match(/^Remove (.+)$/);
  if (match) return "Xóa " + translateText(match[1]);
  match = key.match(/^Added [“"](.+)[”"] to your cart\.$/);
  if (match) return "Đã thêm “" + translateText(match[1]) + "” vào giỏ hàng.";
  match = key.match(/^(\d+) days · (\d+) hours · (\d+) minutes until Halloween$/);
  if (match) return "Còn " + match[1] + " ngày · " + match[2] + " giờ · " + match[3] + " phút đến Halloween";
  return key;
}

export function initLanguage() {
  const button = document.querySelector("#language-toggle");
  if (!button) return;
  let language = localStorage.getItem("halloween-language") === "vi" ? "vi" : "en";
  const originals = new WeakMap();
  const translateNode = node => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const source = originals.get(node);
      const key = source.trim().replace(/\s+/g, " ");
      if (!key) return;
      const leading = source.match(/^\s*/)?.[0] || "";
      const trailing = source.match(/\s*$/)?.[0] || "";
      node.nodeValue = language === "vi" ? `${leading}${translateText(key)}${trailing}` : source;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.matches("input, textarea")) {
        if (!node.dataset.originalPlaceholder) node.dataset.originalPlaceholder = node.placeholder;
        if (language === "vi") node.placeholder = node.id === "product-search" ? "Tìm trong cửa hàng ma ám…" : node.id === "vocab-search" ? "Tìm từ hoặc định nghĩa…" : node.dataset.originalPlaceholder;
        else node.placeholder = node.dataset.originalPlaceholder;
      }
      ["aria-label", "alt", "title"].forEach(attribute => {
        if (!node.hasAttribute(attribute)) return;
        const key = `original${attribute.replace(/(^|-)(.)/g, (_, _dash, letter) => letter.toUpperCase())}`;
        if (!(key in node.dataset)) node.dataset[key] = node.getAttribute(attribute);
        const original = node.dataset[key];
        node.setAttribute(attribute, language === "vi" ? translateText(original) : original);
      });
      node.childNodes.forEach(translateNode);
    }
  };
  const render = () => {
    document.documentElement.lang = language;
    document.body.childNodes.forEach(translateNode);
    button.textContent = language === "vi" ? "English" : "Tiếng Việt";
    button.setAttribute("aria-pressed", String(language === "vi"));
    button.setAttribute("aria-label", language === "vi" ? "Chuyển trang sang tiếng Anh" : "Dịch trang sang tiếng Việt");
    localStorage.setItem("halloween-language", language);
  };
  button.addEventListener("click", () => { language = language === "vi" ? "en" : "vi"; render(); });
  const observer = new MutationObserver(records => records.forEach(record => {
    record.addedNodes.forEach(translateNode);
  }));
  observer.observe(document.body, { childList: true, subtree: true });
  render();
}
