import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    Image as ImageIcon,
    Settings,
    Users,
    Briefcase,
    GraduationCap,
    LogOut,
    Plus,
    Trash2,
    Edit,
    Search,
    Upload,
    Bell,
    Menu,
    X,
    UserCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAddNewsOpen, setIsAddNewsOpen] = useState(false);
    const [isUploadPhotoOpen, setIsUploadPhotoOpen] = useState(false);
    const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);

    // Form states
    const [newsForm, setNewsForm] = useState({ title: "", category: "", content: "" });
    const [photoForm, setPhotoForm] = useState({ title: "", description: "" });
    const [staffForm, setStaffForm] = useState({ name: "", position: "", nip: "" });

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const handleSaveNews = () => {
        toast.success("Berita berhasil disimpan!");
        setIsAddNewsOpen(false);
        setNewsForm({ title: "", category: "", content: "" });
    };

    const handleUploadPhoto = () => {
        toast.success("Foto berhasil diunggah!");
        setIsUploadPhotoOpen(false);
        setPhotoForm({ title: "", description: "" });
    };

    const handleSaveStaff = () => {
        toast.success("Data Guru/Staff berhasil disimpan!");
        setIsAddStaffOpen(false);
        setStaffForm({ name: "", position: "", nip: "" });
    };

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "berita", label: "Kelola Berita", icon: FileText },
        { id: "galeri", label: "Kelola Galeri", icon: ImageIcon },
        { id: "staff", label: "Guru & Staff", icon: Briefcase },
        { id: "sekolah", label: "Info Sekolah", icon: Settings },
        { id: "ppdb", label: "Data PPDB", icon: GraduationCap },
    ];

    return (
        <div className="flex min-h-screen bg-secondary/30">
            {/* Sidebar */}
            <aside className={cn(
                "bg-foreground text-primary-foreground w-64 fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:translate-x-0 lg:static",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 flex flex-col h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                <span className="font-bold text-lg text-primary-foreground">A</span>
                            </div>
                            <div>
                                <h2 className="font-serif font-bold text-lg leading-tight text-white">Admin Panel</h2>
                                <p className="text-xs text-primary-foreground/50">SMKN Jateng Pati</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10 text-primary-foreground/70"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="space-y-1 flex-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    activeTab === item.id
                                        ? "bg-primary text-primary-foreground"
                                        : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-white"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors mt-auto"
                    >
                        <LogOut className="w-5 h-5" />
                        Keluar
                    </button>
                </div>
            </aside>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-x-hidden">
                {/* Header */}
                <header className="bg-white border-b border-border h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-40">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="relative hidden md:block w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Cari sesuatu..." className="pl-10 h-9" />
                        </div>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                        </Button>
                        <div className="flex items-center gap-3 pl-4 border-l border-border">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold leading-tight">Administrator</p>
                                <p className="text-xs text-muted-foreground">Admin Utama</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border">
                                <Users className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-4 sm:p-8">
                    {activeTab === "dashboard" && (
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h1 className="font-serif text-2xl sm:text-3xl font-bold">Dashboard</h1>
                                <p className="text-sm sm:text-base text-muted-foreground text-left sm:text-right">Selamat datang kembali, Admin!</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { label: "Total Berita", value: "24", icon: FileText, color: "text-blue-500" },
                                    { label: "Foto Galeri", value: "112", icon: ImageIcon, color: "text-purple-500" },
                                    { label: "Pendaftar PPDB", value: "842", icon: Users, color: "text-green-500" },
                                    { label: "Kunjungan Web", value: "12,4k", icon: Bell, color: "text-orange-500" },
                                ].map((stat, i) => (
                                    <Card key={i}>
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                                            <stat.icon className={cn("w-4 h-4", stat.color)} />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <p className="text-xs text-muted-foreground">+12% dari bulan lalu</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="grid lg:grid-cols-3 gap-6">
                                <Card className="lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Aktivitas Terakhir</CardTitle>
                                        <CardDescription>Update konten terbaru yang dilakukan hari ini</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[1, 2, 3].map((_, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
                                                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-sm">Update Berita: "Prestasi Siswa TPBO di Lomba Nasional"</p>
                                                        <p className="text-xs text-muted-foreground">Oleh Admin Utama • 2 jam yang lalu</p>
                                                    </div>
                                                    <Button variant="ghost" size="sm">Edit</Button>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Status PPDB</CardTitle>
                                        <CardDescription>Statistik pendaftaran tahun ini</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span>Terverifikasi</span>
                                            <span className="font-bold">542</span>
                                        </div>
                                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className="w-[65%] h-full bg-green-500" />
                                        </div>
                                        <div className="flex justify-between items-center text-sm pt-2">
                                            <span>Menunggu Review</span>
                                            <span className="font-bold">300</span>
                                        </div>
                                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className="w-[35%] h-full bg-orange-500" />
                                        </div>
                                        <Button variant="outline" className="w-full mt-4">Lihat Semua Data</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}

                    {activeTab === "berita" && (
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h1 className="font-serif text-2xl sm:text-3xl font-bold">Kelola Berita</h1>
                                <Button variant="hero" className="gap-2 w-full sm:w-auto" onClick={() => setIsAddNewsOpen(true)}>
                                    <Plus className="w-4 h-4" /> Berita Baru
                                </Button>
                            </div>
                            <Card>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="border-b border-border bg-secondary/20">
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Judul</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Tgl Publish</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                                                    <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[1, 2, 3, 4, 5].map((_, i) => (
                                                    <tr key={i} className="border-b border-border hover:bg-secondary/10 transition-colors">
                                                        <td className="px-6 py-4 font-medium text-sm">Kunjungan Industri Siswa TPHP ke PT. Bogasari</td>
                                                        <td className="px-6 py-4 text-sm text-muted-foreground">12 Des 2024</td>
                                                        <td className="px-6 py-4">
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Published</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <div className="flex justify-end gap-2">
                                                                <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 h-4" /></Button>
                                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500"><Trash2 className="h-4 h-4" /></Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "galeri" && (
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h1 className="font-serif text-2xl sm:text-3xl font-bold">Kelola Galeri</h1>
                                <Button variant="hero" className="gap-2 w-full sm:w-auto" onClick={() => setIsUploadPhotoOpen(true)}>
                                    <Upload className="w-4 h-4" /> Upload Foto
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                                    <div key={i} className="group relative aspect-square rounded-xl overflow-hidden bg-secondary border border-border">
                                        <img src={`https://picsum.photos/seed/${i + 10}/400/400`} alt="Gallery" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <Button variant="outline" size="icon" className="h-8 w-8 text-white bg-white/20 border-white/40 hover:bg-white/40">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="destructive" size="icon" className="h-8 w-8">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "sekolah" && (
                        <div className="space-y-6">
                            <h1 className="font-serif text-2xl sm:text-3xl font-bold">Info Sekolah</h1>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Profil Sekolah</CardTitle>
                                    <CardDescription>Informasi umum yang tampil di halaman utama dan footer</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Nama Sekolah</Label>
                                            <Input defaultValue="SMKN Jawa Tengah Pati" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Tagline</Label>
                                            <Input defaultValue="Sang Juara - Tiada Hari Tanpa Prestasi" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Alamat</Label>
                                        <Input defaultValue="Jl. Raya Pati-Kudus KM. 4, Pati" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Email</Label>
                                            <Input defaultValue="info@smknjatengpati.sch.id" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Telepon</Label>
                                            <Input defaultValue="082112345678" />
                                        </div>
                                    </div>
                                    <Button variant="hero" className="mt-4">Simpan Perubahan</Button>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "ppdb" && (
                        <div className="space-y-6">
                            <h1 className="font-serif text-2xl sm:text-3xl font-bold">Pengaturan PPDB</h1>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Setup Pendaftaran</CardTitle>
                                    <CardDescription>Aktifkan/nonaktifkan pendaftaran dan atur jadwal</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-secondary/30 border border-border rounded-lg gap-4">
                                        <div>
                                            <p className="font-bold">Status Pendaftaran Online</p>
                                            <p className="text-sm text-muted-foreground">Saat ini pendaftaran sedang dibuka</p>
                                        </div>
                                        <Button variant="destructive" className="w-full sm:w-auto">Tutup Pendaftaran</Button>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-bold text-lg">Jadwal Tahapan</h3>
                                        <div className="space-y-3">
                                            {[
                                                { step: "Admin", date: "s/d 31 Jan 2025" },
                                                { step: "Tes Tulis", date: "15 Feb 2025" },
                                                { step: "Tes Fisik", date: "3 Mar 2025" },
                                            ].map((t, i) => (
                                                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                                    <div className="w-full sm:w-32 text-sm font-medium">{t.step}</div>
                                                    <div className="flex items-center gap-2 flex-1">
                                                        <Input defaultValue={t.date} className="max-w-xs" />
                                                        <Button variant="ghost" size="icon" className="shrink-0"><Edit className="w-4 h-4" /></Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button variant="hero">Simpan Jadwal</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h3 className="font-serif text-xl font-bold">Data Pendaftar PPDB</h3>
                                    <CardDescription>Daftar calon siswa yang telah mengisi formulir online</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[700px]">
                                            <thead>
                                                <tr className="border-b border-border bg-secondary/20">
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Nama</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">NISN</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Sekolah Asal</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Jurusan</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                                                    <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { name: "Ahmad Fauzi", nisn: "0081234567", school: "SMPN 1 Pati", major: "TPTP", status: "Terverifikasi" },
                                                    { name: "Siti Aminah", nisn: "0098765432", school: "SMPN 3 Kudus", major: "TPBO", status: "Menunggu" },
                                                    { name: "Budi Santoso", nisn: "0085544332", school: "SMPN 2 Pati", major: "TPTP", status: "Terverifikasi" },
                                                    { name: "Dewi Lestari", nisn: "0071122334", school: "SMPN 1 Juwana", major: "TPBO", status: "Gagal" },
                                                ].map((student, i) => (
                                                    <tr key={i} className="border-b border-border hover:bg-secondary/10 transition-colors">
                                                        <td className="px-6 py-4 font-medium text-sm">{student.name}</td>
                                                        <td className="px-6 py-4 text-sm text-muted-foreground">{student.nisn}</td>
                                                        <td className="px-6 py-4 text-sm text-muted-foreground">{student.school}</td>
                                                        <td className="px-6 py-4 text-sm font-bold text-primary">{student.major}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={cn(
                                                                "px-2 py-1 text-[10px] font-bold rounded uppercase",
                                                                student.status === "Terverifikasi" ? "bg-green-100 text-green-700" :
                                                                    student.status === "Menunggu" ? "bg-orange-100 text-orange-700" :
                                                                        "bg-red-100 text-red-700"
                                                            )}>
                                                                {student.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <Button variant="ghost" size="sm">Detail</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "staff" && (
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h1 className="font-serif text-2xl sm:text-3xl font-bold">Kelola Guru & Staff</h1>
                                <Button variant="hero" className="gap-2 w-full sm:w-auto" onClick={() => setIsAddStaffOpen(true)}>
                                    <Plus className="w-4 h-4" /> Tambah Personil
                                </Button>
                            </div>
                            <Card>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[700px]">
                                            <thead>
                                                <tr className="border-b border-border bg-secondary/20">
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Foto</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Nama Lengkap</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Jabatan / Mata Pelajaran</th>
                                                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">NIP / Kode</th>
                                                    <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { name: "Drs. Hardidi, M.Pd.", position: "Kepala Sekolah", code: "196708121990031005" },
                                                    { name: "Bambang Setiawan, S.T.", position: "Kaprog TPBO", code: "G001" },
                                                    { name: "Siti Rahayu, S.Pd.", position: "Guru Bahasa Indonesia", code: "G002" },
                                                    { name: "Agus Prasetyo, S.Kom.", position: "Guru Produktif TPTP", code: "G003" },
                                                ].map((staff, i) => (
                                                    <tr key={i} className="border-b border-border hover:bg-secondary/10 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden border border-border">
                                                                <img src={`https://i.pravatar.cc/150?u=${staff.code}`} alt={staff.name} className="w-full h-full object-cover" />
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-sm">{staff.name}</td>
                                                        <td className="px-6 py-4 text-sm text-muted-foreground">{staff.position}</td>
                                                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{staff.code}</td>
                                                        <td className="px-6 py-4 text-right">
                                                            <div className="flex justify-end gap-2">
                                                                <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 w-4" /></Button>
                                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500"><Trash2 className="h-4 w-4" /></Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>

                {/* Modals */}
                <Dialog open={isAddNewsOpen} onOpenChange={setIsAddNewsOpen}>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 overflow-hidden">
                        <DialogHeader className="p-6 pb-2">
                            <DialogTitle>Tambah Berita Baru</DialogTitle>
                            <DialogDescription>
                                Isi formulir di bawah ini untuk mempublikasikan berita baru ke website.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex-1 overflow-y-auto p-6 pt-0">
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Judul Berita</Label>
                                    <Input
                                        id="title"
                                        placeholder="Masukkan judul berita..."
                                        value={newsForm.title}
                                        onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Kategori</Label>
                                    <Select
                                        onValueChange={(value) => setNewsForm({ ...newsForm, category: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="prestasi">Prestasi</SelectItem>
                                            <SelectItem value="industri">Kunjungan Industri</SelectItem>
                                            <SelectItem value="pengumuman">Pengumuman</SelectItem>
                                            <SelectItem value="kegiatan">Kegiatan Siswa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="content">Konten Berita</Label>
                                    <Textarea
                                        id="content"
                                        placeholder="Tulis isi berita di sini..."
                                        className="min-h-[200px]"
                                        value={newsForm.content}
                                        onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Gambar Utama (Cover)</Label>
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-secondary/50 transition-colors cursor-pointer">
                                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">Klik untuk upload atau drag and drop</p>
                                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP up to 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="p-6 pt-2 border-t bg-secondary/10">
                            <Button variant="outline" onClick={() => setIsAddNewsOpen(false)}>Batal</Button>
                            <Button variant="hero" onClick={handleSaveNews}>Simpan & Publish</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog open={isUploadPhotoOpen} onOpenChange={setIsUploadPhotoOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Upload Foto Galeri</DialogTitle>
                            <DialogDescription>
                                Pilih foto yang ingin ditambahkan ke galeri sekolah.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label>File Foto</Label>
                                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-secondary/50 transition-colors cursor-pointer">
                                    <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                    <p className="text-xs text-muted-foreground">Pilih file gambar</p>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="photo-title">Judul Foto</Label>
                                <Input
                                    id="photo-title"
                                    placeholder="Contoh: Lomba LKS 2024"
                                    value={photoForm.title}
                                    onChange={(e) => setPhotoForm({ ...photoForm, title: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="photo-desc">Deskripsi Singkat</Label>
                                <Input
                                    id="photo-desc"
                                    placeholder="Keterangan foto..."
                                    value={photoForm.description}
                                    onChange={(e) => setPhotoForm({ ...photoForm, description: e.target.value })}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsUploadPhotoOpen(false)}>Batal</Button>
                            <Button variant="hero" onClick={handleUploadPhoto}>Upload Sekarang</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog open={isAddStaffOpen} onOpenChange={setIsAddStaffOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Tambah Guru / Staff</DialogTitle>
                            <DialogDescription>
                                Tambahkan personil baru ke daftar Guru dan Staff sekolah.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2 text-center">
                                <div className="w-24 h-24 rounded-full bg-secondary mx-auto border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors">
                                    <UserCircle className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <p className="text-xs text-muted-foreground">Upload Foto (Opsional)</p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="staff-name">Nama Lengkap</Label>
                                <Input
                                    id="staff-name"
                                    placeholder="Beserta gelar..."
                                    value={staffForm.name}
                                    onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="staff-nip">NIP / Kode Guru</Label>
                                <Input
                                    id="staff-nip"
                                    placeholder="Masukkan NIP atau kode..."
                                    value={staffForm.nip}
                                    onChange={(e) => setStaffForm({ ...staffForm, nip: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="staff-pos">Jabatan / Mapel</Label>
                                <Input
                                    id="staff-pos"
                                    placeholder="Contoh: Guru Matematika"
                                    value={staffForm.position}
                                    onChange={(e) => setStaffForm({ ...staffForm, position: e.target.value })}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsAddStaffOpen(false)}>Batal</Button>
                            <Button variant="hero" onClick={handleSaveStaff}>Simpan Data</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </main >
        </div >
    );
};

export default AdminDashboard;
