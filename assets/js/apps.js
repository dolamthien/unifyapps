/**
 * DANH SÁCH ỨNG DỤNG — sửa file này để thêm/bớt app.
 *  id          : mã duy nhất (không dấu, không khoảng trắng)
 *  name        : tên hiển thị
 *  description : mô tả ngắn
 *  category    : nhóm (tự tạo bộ lọc theo nhóm)
 *  icon        : emoji hoặc 1-2 ký tự
 *  url         : đường dẫn app, ví dụ "apps/ten-app/" hoặc link ngoài "https://..."
 *  status      : "live" | "beta" | "soon"
 *
 * Dưới đây là DỮ LIỆU DEMO — sẽ thay bằng danh sách thật.
 */
window.UNIFY_APPS = [
  { id: "demo-app", name: "Ứng dụng mẫu", description: "App demo để kiểm tra cấu trúc thư mục apps/.", category: "Demo", icon: "🚀", url: "apps/demo-app/", status: "live" },
  { id: "tinh-toan", name: "Máy tính nhanh", description: "Công cụ tính toán, quy đổi đơn vị thường dùng.", category: "Tiện ích", icon: "🧮", url: "#", status: "soon" },
  { id: "bao-cao", name: "Báo cáo tuần", description: "Tổng hợp và xem báo cáo tuần các phòng ban.", category: "Báo cáo", icon: "📊", url: "#", status: "soon" },
  { id: "dashboard", name: "Dashboard KPI", description: "Theo dõi chỉ số KPI dạng biểu đồ trực quan.", category: "Báo cáo", icon: "📈", url: "#", status: "soon" },
  { id: "tai-lieu", name: "Tra cứu tài liệu", description: "Tìm nhanh quy trình, biểu mẫu nội bộ.", category: "Tài liệu", icon: "📚", url: "#", status: "soon" },
  { id: "it-helpdesk", name: "IT Self-service", description: "Hướng dẫn tự xử lý sự cố máy tính, email, mạng.", category: "Tiện ích", icon: "🛠️", url: "#", status: "soon" }
];
