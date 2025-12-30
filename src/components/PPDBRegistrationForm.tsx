import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
    namaLengkap: string;
    nisn: string;
    tempatLahir: string;
    tanggalLahir: string;
    jenisKelamin: string;
    alamat: string;
    namaOrangTua: string;
    noHpOrangTua: string;
    asalSekolah: string;
    pilihanJurusan: string;
}

const initialFormData: FormData = {
    namaLengkap: "",
    nisn: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    namaOrangTua: "",
    noHpOrangTua: "",
    asalSekolah: "",
    pilihanJurusan: "",
};

const PPDBRegistrationForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        setFileError("");

        if (selectedFile) {
            // Check file type
            if (selectedFile.type !== "application/pdf") {
                setFileError("File harus berformat PDF");
                setFile(null);
                return;
            }

            // Check file size (max 5MB)
            if (selectedFile.size > 5 * 1024 * 1024) {
                setFileError("Ukuran file maksimal 5MB");
                setFile(null);
                return;
            }

            setFile(selectedFile);
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.namaLengkap.trim()) newErrors.namaLengkap = "Nama lengkap wajib diisi";
        if (!formData.nisn.trim()) newErrors.nisn = "NISN wajib diisi";
        if (formData.nisn && !/^\d{10}$/.test(formData.nisn)) newErrors.nisn = "NISN harus 10 digit angka";
        if (!formData.tempatLahir.trim()) newErrors.tempatLahir = "Tempat lahir wajib diisi";
        if (!formData.tanggalLahir) newErrors.tanggalLahir = "Tanggal lahir wajib diisi";
        if (!formData.jenisKelamin) newErrors.jenisKelamin = "Jenis kelamin wajib dipilih";
        if (!formData.alamat.trim()) newErrors.alamat = "Alamat wajib diisi";
        if (!formData.namaOrangTua.trim()) newErrors.namaOrangTua = "Nama orang tua wajib diisi";
        if (!formData.noHpOrangTua.trim()) newErrors.noHpOrangTua = "No. HP wajib diisi";
        if (!formData.asalSekolah.trim()) newErrors.asalSekolah = "Asal sekolah wajib diisi";
        if (!formData.pilihanJurusan) newErrors.pilihanJurusan = "Pilihan jurusan wajib dipilih";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!file) {
            setFileError("File berkas wajib diunggah");
            return;
        }

        setIsSubmitting(true);

        // Simulate submission (in real app, this would send to backend)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Pendaftaran Berhasil!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Terima kasih telah mendaftar. Data Anda telah kami terima dan akan segera diproses.
                    Silakan pantau email dan SMS untuk informasi selanjutnya.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData(initialFormData);
                        setFile(null);
                    }}
                >
                    Daftar Lagi
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div className="space-y-2">
                    <Label htmlFor="namaLengkap">Nama Lengkap *</Label>
                    <Input
                        id="namaLengkap"
                        placeholder="Masukkan nama lengkap"
                        value={formData.namaLengkap}
                        onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                        className={cn("h-11 md:h-10", errors.namaLengkap ? "border-destructive" : "")}
                    />
                    {errors.namaLengkap && (
                        <p className="text-destructive text-sm">{errors.namaLengkap}</p>
                    )}
                </div>

                {/* NISN */}
                <div className="space-y-2">
                    <Label htmlFor="nisn">NISN *</Label>
                    <Input
                        id="nisn"
                        placeholder="10 digit NISN"
                        value={formData.nisn}
                        onChange={(e) => handleInputChange("nisn", e.target.value)}
                        maxLength={10}
                        className={cn("h-11 md:h-10", errors.nisn ? "border-destructive" : "")}
                    />
                    {errors.nisn && (
                        <p className="text-destructive text-sm">{errors.nisn}</p>
                    )}
                </div>

                {/* Tempat Lahir */}
                <div className="space-y-2">
                    <Label htmlFor="tempatLahir">Tempat Lahir *</Label>
                    <Input
                        id="tempatLahir"
                        placeholder="Kota/Kabupaten kelahiran"
                        value={formData.tempatLahir}
                        onChange={(e) => handleInputChange("tempatLahir", e.target.value)}
                        className={cn("h-11 md:h-10", errors.tempatLahir ? "border-destructive" : "")}
                    />
                    {errors.tempatLahir && (
                        <p className="text-destructive text-sm">{errors.tempatLahir}</p>
                    )}
                </div>

                {/* Tanggal Lahir */}
                <div className="space-y-2">
                    <Label htmlFor="tanggalLahir">Tanggal Lahir *</Label>
                    <Input
                        id="tanggalLahir"
                        type="date"
                        value={formData.tanggalLahir}
                        onChange={(e) => handleInputChange("tanggalLahir", e.target.value)}
                        className={cn("h-11 md:h-10", errors.tanggalLahir ? "border-destructive" : "")}
                    />
                    {errors.tanggalLahir && (
                        <p className="text-destructive text-sm">{errors.tanggalLahir}</p>
                    )}
                </div>

                {/* Jenis Kelamin */}
                <div className="space-y-2">
                    <Label>Jenis Kelamin *</Label>
                    <Select
                        value={formData.jenisKelamin}
                        onValueChange={(value) => handleInputChange("jenisKelamin", value)}
                    >
                        <SelectTrigger className={cn("h-11 md:h-10", errors.jenisKelamin ? "border-destructive" : "")}>
                            <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="laki-laki">Laki-laki</SelectItem>
                            <SelectItem value="perempuan">Perempuan</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.jenisKelamin && (
                        <p className="text-destructive text-sm">{errors.jenisKelamin}</p>
                    )}
                </div>

                {/* Asal Sekolah */}
                <div className="space-y-2">
                    <Label htmlFor="asalSekolah">Asal Sekolah (SMP/MTs) *</Label>
                    <Input
                        id="asalSekolah"
                        placeholder="Nama sekolah asal"
                        value={formData.asalSekolah}
                        onChange={(e) => handleInputChange("asalSekolah", e.target.value)}
                        className={cn("h-11 md:h-10", errors.asalSekolah ? "border-destructive" : "")}
                    />
                    {errors.asalSekolah && (
                        <p className="text-destructive text-sm">{errors.asalSekolah}</p>
                    )}
                </div>

                {/* Nama Orang Tua */}
                <div className="space-y-2">
                    <Label htmlFor="namaOrangTua">Nama Orang Tua/Wali *</Label>
                    <Input
                        id="namaOrangTua"
                        placeholder="Nama ayah/ibu/wali"
                        value={formData.namaOrangTua}
                        onChange={(e) => handleInputChange("namaOrangTua", e.target.value)}
                        className={cn("h-11 md:h-10", errors.namaOrangTua ? "border-destructive" : "")}
                    />
                    {errors.namaOrangTua && (
                        <p className="text-destructive text-sm">{errors.namaOrangTua}</p>
                    )}
                </div>

                {/* No HP Orang Tua */}
                <div className="space-y-2">
                    <Label htmlFor="noHpOrangTua">No. HP Orang Tua/Wali *</Label>
                    <Input
                        id="noHpOrangTua"
                        placeholder="08xxxxxxxxxx"
                        value={formData.noHpOrangTua}
                        onChange={(e) => handleInputChange("noHpOrangTua", e.target.value)}
                        className={cn("h-11 md:h-10", errors.noHpOrangTua ? "border-destructive" : "")}
                    />
                    {errors.noHpOrangTua && (
                        <p className="text-destructive text-sm">{errors.noHpOrangTua}</p>
                    )}
                </div>

                {/* Pilihan Jurusan */}
                <div className="space-y-2 md:col-span-2">
                    <Label>Pilihan Program Studi *</Label>
                    <Select
                        value={formData.pilihanJurusan}
                        onValueChange={(value) => handleInputChange("pilihanJurusan", value)}
                    >
                        <SelectTrigger className={cn("h-11 md:h-10", errors.pilihanJurusan ? "border-destructive" : "")}>
                            <SelectValue placeholder="Pilih program studi" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="tphp">TPHP - Teknologi Pengolahan Hasil Pertanian</SelectItem>
                            <SelectItem value="tpbo">TPBO - Teknik Produksi dan Penyiaran Program Radio dan Pertelevisian</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.pilihanJurusan && (
                        <p className="text-destructive text-sm">{errors.pilihanJurusan}</p>
                    )}
                </div>

                {/* Alamat */}
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="alamat">Alamat Lengkap *</Label>
                    <Input
                        id="alamat"
                        placeholder="Alamat lengkap termasuk RT/RW, Desa, Kecamatan"
                        value={formData.alamat}
                        onChange={(e) => handleInputChange("alamat", e.target.value)}
                        className={errors.alamat ? "border-destructive" : ""}
                    />
                    {errors.alamat && (
                        <p className="text-destructive text-sm">{errors.alamat}</p>
                    )}
                </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
                <Label>Upload Berkas (PDF, maks. 5MB) *</Label>
                <p className="text-sm text-muted-foreground mb-2">
                    Gabungkan semua berkas (Ijazah, SKHUN, Rapor, KK, KTP Ortu, SKTM, Foto, dll) menjadi 1 file PDF.
                </p>
                <div
                    className={cn(
                        "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
                        file ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
                        fileError && "border-destructive"
                    )}
                >
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileUpload"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                        {file ? (
                            <div className="flex items-center justify-center gap-2 text-primary">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">{file.name}</span>
                                <span className="text-muted-foreground text-sm">
                                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </span>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                <Upload className="w-8 h-8" />
                                <span>Klik untuk upload file PDF</span>
                                <span className="text-xs">Maksimal 5MB</span>
                            </div>
                        )}
                    </label>
                </div>
                {fileError && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {fileError}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full text-lg"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Mengirim Data...
                    </>
                ) : (
                    "Kirim Pendaftaran"
                )}
            </Button>
        </form>
    );
};

export default PPDBRegistrationForm;
