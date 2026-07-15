/**
 * AuraRecord - Screen Recorder App Engine
 */

// --- Multi-Language i18n System ---
const LANGUAGES = {
    en: {
        "page-title": "AuraRecord - Minimalist & HD Screen Recorder",
        "status-ready": "System Ready",
        "config-title": "Recording Config",
        "config-subtitle": "Select input video and audio sources",
        "video-quality": "Video Quality",
        "quality-hd": "1080p (HD)",
        "quality-sd": "720p (SD)",
        "frame-rate": "Frame Rate",
        "fps-smooth": "60 FPS (Smooth)",
        "fps-standard": "30 FPS (Standard)",
        "audio-source": "Audio Sources",
        "mic-toggle-title": "Microphone",
        "mic-toggle-desc": "Record your vocal input",
        "sys-audio-title": "System Audio",
        "sys-audio-desc": "Record system audio during screen sharing",
        "advanced-settings": "Advanced Settings",
        "webcam-toggle-title": "Webcam Overlay",
        "webcam-toggle-desc": "Show a draggable webcam preview on the page",
        "mic-level": "Microphone Level",
        "start-recording": "Start Recording",
        "pause": "Pause",
        "resume": "Resume",
        "stop": "Stop",
        "gallery-title": "Local Recordings",
        "gallery-subtitle": "Automatically saved in your browser, exportable anytime",
        "gallery-empty-title": "No recordings yet",
        "gallery-empty-desc": "Click 'Start Recording' on the left to begin",
        "preview-title": "Video Preview",
        "delete": "Delete",
        "download-video": "Download Video",
        "btn-download": "Download",
        "btn-delete": "Delete",
        "toast-start-recording": "Started screen recording",
        "toast-paused": "Recording paused",
        "toast-resumed": "Recording resumed",
        "toast-db-saved": "Video saved successfully to local gallery",
        "toast-db-failed": "Failed to save to local database, downloading directly...",
        "toast-too-small": "Video file too small, saving failed",
        "toast-thumbnail": "Generating video thumbnail...",
        "toast-camera-active": "Webcam preview enabled",
        "toast-camera-failed": "Unable to access webcam",
        "toast-mic-failed": "Unable to start microphone. Recording silent video.",
        "toast-start-failed": "Failed to start recording: ",
        "toast-downloading": "Starting video download",
        "toast-deleted": "Video deleted successfully",
        "toast-delete-failed": "Failed to delete video",
        "toast-load-failed": "Failed to load recording list",
        "confirm-delete": "Are you sure you want to delete this recording?",
        "recording-name-default": "Recording",
        "status-recording": "Recording...",
        "status-paused": "Recording Paused",
    },
    "zh-CN": {
        "page-title": "AuraRecord - 极简/高清网页录屏工具",
        "status-ready": "系统就绪",
        "config-title": "录制配置",
        "config-subtitle": "选择视频与音频输入源",
        "video-quality": "视频质量",
        "quality-hd": "1080p (高清)",
        "quality-sd": "720p (标清)",
        "frame-rate": "帧率",
        "fps-smooth": "60 FPS (流畅)",
        "fps-standard": "30 FPS (标准)",
        "audio-source": "音频源",
        "mic-toggle-title": "麦克风录音",
        "mic-toggle-desc": "录制您的声音输入",
        "sys-audio-title": "系统音频",
        "sys-audio-desc": "分享屏幕时同步录制系统声音",
        "advanced-settings": "高级辅助",
        "webcam-toggle-title": "摄像头画面悬浮窗",
        "webcam-toggle-desc": "在页面上显示一个可拖拽的摄像头画面",
        "mic-level": "麦克风电平",
        "start-recording": "开始录制",
        "pause": "暂停",
        "resume": "恢复",
        "stop": "停止",
        "gallery-title": "本地录像库",
        "gallery-subtitle": "录制完成后自动保存在浏览器中，随时可导出",
        "gallery-empty-title": "暂无录制视频",
        "gallery-empty-desc": "点击左侧的“开始录制”按钮即可开始录像",
        "preview-title": "视频预览",
        "delete": "删除",
        "download-video": "下载视频",
        "btn-download": "下载",
        "btn-delete": "删除",
        "toast-start-recording": "开始录制屏幕",
        "toast-paused": "录制已暂停",
        "toast-resumed": "恢复录制",
        "toast-db-saved": "视频已成功保存到本地库",
        "toast-db-failed": "保存到本地数据库失败，正在直接下载...",
        "toast-too-small": "视频文件太小，保存失败",
        "toast-thumbnail": "正在生成视频缩略图...",
        "toast-camera-active": "摄像头预览已开启",
        "toast-camera-failed": "无法访问您的摄像头",
        "toast-mic-failed": "无法启动麦克风，将只录制系统声音或无声录屏",
        "toast-start-failed": "启动录制失败: ",
        "toast-downloading": "开始下载视频",
        "toast-deleted": "已成功删除视频",
        "toast-delete-failed": "删除视频失败",
        "toast-load-failed": "加载录像列表失败",
        "confirm-delete": "确认要删除此录像吗？",
        "recording-name-default": "录屏",
        "status-recording": "录制中...",
        "status-paused": "录制暂停",
    },
    "zh-TW": {
        "page-title": "AuraRecord - 極簡/高清網頁錄屏工具",
        "status-ready": "系統就緒",
        "config-title": "錄製配置",
        "config-subtitle": "選擇視頻與音頻輸入源",
        "video-quality": "視頻質量",
        "quality-hd": "1080p (高清)",
        "quality-sd": "720p (標清)",
        "frame-rate": "幀率",
        "fps-smooth": "60 FPS (流暢)",
        "fps-standard": "30 FPS (標準)",
        "audio-source": "音頻源",
        "mic-toggle-title": "麥克風錄音",
        "mic-toggle-desc": "錄製您的聲音輸入",
        "sys-audio-title": "系統音頻",
        "sys-audio-desc": "分享屏幕時同步錄製系統聲音",
        "advanced-settings": "高級輔助",
        "webcam-toggle-title": "攝像頭畫面懸浮窗",
        "webcam-toggle-desc": "在頁面上顯示一個可拖拽的攝像頭畫面",
        "mic-level": "麥克風電平",
        "start-recording": "開始錄製",
        "pause": "暫停",
        "resume": "恢復",
        "stop": "停止",
        "gallery-title": "本地錄像庫",
        "gallery-subtitle": "錄製完成後自動保存在瀏覽器中，隨時可導出",
        "gallery-empty-title": "暫無錄製視頻",
        "gallery-empty-desc": "點擊左側的“開始錄製”按鈕即可開始錄像",
        "preview-title": "視頻預覽",
        "delete": "刪除",
        "download-video": "下載視頻",
        "btn-download": "下載",
        "btn-delete": "刪除",
        "toast-start-recording": "開始錄製屏幕",
        "toast-paused": "錄製已暫停",
        "toast-resumed": "恢復錄製",
        "toast-db-saved": "視頻已成功保存到本地庫",
        "toast-db-failed": "保存到本地數據庫失敗，正在直接下載...",
        "toast-too-small": "視頻文件太小，保存失敗",
        "toast-thumbnail": "正在生成視頻縮略圖...",
        "toast-camera-active": "攝像頭預覽已開啟",
        "toast-camera-failed": "無法訪問您的攝像頭",
        "toast-mic-failed": "無法啟動麥克風，將只錄製系統聲音或無聲錄屏",
        "toast-start-failed": "啟動錄製失敗: ",
        "toast-downloading": "開始下載視頻",
        "toast-deleted": "已成功刪除視頻",
        "toast-delete-failed": "刪除視頻失敗",
        "toast-load-failed": "加載錄像列表失敗",
        "confirm-delete": "確認要刪除此錄像嗎？",
        "recording-name-default": "錄屏",
        "status-recording": "錄製中...",
        "status-paused": "錄製暫停",
    },
    ja: {
        "page-title": "AuraRecord - シンプル＆高画質画面録画ツール",
        "status-ready": "準備完了",
        "config-title": "録画設定",
        "config-subtitle": "映像と音声の入力元を選択",
        "video-quality": "画質",
        "quality-hd": "1080p (高画質)",
        "quality-sd": "720p (標準)",
        "frame-rate": "フレームレート",
        "fps-smooth": "60 FPS (滑らか)",
        "fps-standard": "30 FPS (標準)",
        "audio-source": "音声ソース",
        "mic-toggle-title": "マイク録音",
        "mic-toggle-desc": "マイクから自分の声を録音する",
        "sys-audio-title": "システム音声",
        "sys-audio-desc": "画面共有中にPC内部の音声を録音する",
        "advanced-settings": "詳細機能",
        "webcam-toggle-title": "ウェブカメラ表示",
        "webcam-toggle-desc": "ドラッグ可能なカメラ映像を画面に重ねる",
        "mic-level": "マイクレベル",
        "start-recording": "録画開始",
        "pause": "一時停止",
        "resume": "再開",
        "stop": "停止",
        "gallery-title": "ローカル録画ライブラリ",
        "gallery-subtitle": "ブラウザ内に自動で保存され、いつでも保存できます",
        "gallery-empty-title": "録画がありません",
        "gallery-empty-desc": "左側の「録画開始」ボタンをクリックして開始します",
        "preview-title": "ビデオプレビュー",
        "delete": "削除",
        "download-video": "動画を保存",
        "btn-download": "保存",
        "btn-delete": "削除",
        "toast-start-recording": "画面録画を開始しました",
        "toast-paused": "録画を一時停止しました",
        "toast-resumed": "録画を再開しました",
        "toast-db-saved": "録画がライブラリに保存されました",
        "toast-db-failed": "ローカル保存に失敗しました。直接ダウンロードします...",
        "toast-too-small": "ファイルサイズが小さすぎるため保存できません",
        "toast-thumbnail": "サムネイルを生成中...",
        "toast-camera-active": "カメラプレビューが有効になりました",
        "toast-camera-failed": "カメラにアクセスできません",
        "toast-mic-failed": "マイクが起動できません。システム音のみ、または無音で録画します。",
        "toast-start-failed": "録画の開始に失敗しました: ",
        "toast-downloading": "ダウンロードを開始します",
        "toast-deleted": "録画を削除しました",
        "toast-delete-failed": "録画の削除に失敗しました",
        "toast-load-failed": "録画一覧の読み込みに失敗しました",
        "confirm-delete": "この録画を削除してもよろしいですか？",
        "recording-name-default": "録画",
        "status-recording": "録画中...",
        "status-paused": "録画一時停止",
    },
    ko: {
        "page-title": "AuraRecord - 미니멀 고화질 화면 녹화",
        "status-ready": "준비 완료",
        "config-title": "녹화 설정",
        "config-subtitle": "화면 및 소리 입력 선택",
        "video-quality": "화질",
        "quality-hd": "1080p (고화질)",
        "quality-sd": "720p (일반)",
        "frame-rate": "프레임 레이트",
        "fps-smooth": "60 FPS (부드러움)",
        "fps-standard": "30 FPS (표준)",
        "audio-source": "오디오 설정",
        "mic-toggle-title": "마이크 녹음",
        "mic-toggle-desc": "사용자 음성 마이크 녹음",
        "sys-audio-title": "시스템 오디오",
        "sys-audio-desc": "화면 공유 시 시스템 내부 소리 녹음",
        "advanced-settings": "고급 기능",
        "webcam-toggle-title": "카메라 오버레이",
        "webcam-toggle-desc": "화면에 드래그 가능한 웹캠 화면 표시",
        "mic-level": "마이크 데시벨",
        "start-recording": "녹화 시작",
        "pause": "일시 정지",
        "resume": "재개",
        "stop": "정지",
        "gallery-title": "로컬 보관함",
        "gallery-subtitle": "녹화된 영상은 브라우저에 자동 저장되며 언제든지 다운로드 가능합니다",
        "gallery-empty-title": "보관된 영상이 없습니다",
        "gallery-empty-desc": "왼쪽의 '녹화 시작' 버튼을 누르면 시작됩니다",
        "preview-title": "미리보기",
        "delete": "삭제",
        "download-video": "동영상 다운로드",
        "btn-download": "다운로드",
        "btn-delete": "삭제",
        "toast-start-recording": "화면 녹화를 시작합니다",
        "toast-paused": "녹화가 일시 정지되었습니다",
        "toast-resumed": "녹화를 재개합니다",
        "toast-db-saved": "영상이 로컬 보관함에 저장되었습니다",
        "toast-db-failed": "로컬 저장에 실패하여 파일로 직접 다운로드합니다...",
        "toast-too-small": "비디오 파일이 너무 작아 저장할 수 없습니다",
        "toast-thumbnail": "썸네일을 생성하는 중...",
        "toast-camera-active": "웹캠 미리보기가 켜졌습니다",
        "toast-camera-failed": "카메라 장치에 액세스할 수 없습니다",
        "toast-mic-failed": "마이크를 시작할 수 없습니다. 시스템 오디오 혹은 무음으로 녹화됩니다.",
        "toast-start-failed": "녹화 시작 실패: ",
        "toast-downloading": "비디오 다운로드를 시작합니다",
        "toast-deleted": "비디오가 삭제되었습니다",
        "toast-delete-failed": "비디오 삭제에 실패했습니다",
        "toast-load-failed": "비디오 보관함 불러오기 실패",
        "confirm-delete": "이 녹화 영상을 삭제하시겠습니까?",
        "recording-name-default": "녹화영상",
        "status-recording": "녹화 중...",
        "status-paused": "일시 정지됨",
    },
    es: {
        "page-title": "AuraRecord - Grabador de pantalla minimalista y HD",
        "status-ready": "Sistema Listo",
        "config-title": "Configuración",
        "config-subtitle": "Seleccionar fuentes de video y audio",
        "video-quality": "Calidad de Video",
        "quality-hd": "1080p (HD)",
        "quality-sd": "720p (SD)",
        "frame-rate": "Fotogramas",
        "fps-smooth": "60 FPS (Fluido)",
        "fps-standard": "30 FPS (Estándar)",
        "audio-source": "Fuentes de Audio",
        "mic-toggle-title": "Micrófono",
        "mic-toggle-desc": "Graba tu voz desde el micrófono",
        "sys-audio-title": "Audio del Sistema",
        "sys-audio-desc": "Graba el sonido interno al compartir pantalla",
        "advanced-settings": "Ayudas Avanzadas",
        "webcam-toggle-title": "Cámara flotante",
        "webcam-toggle-desc": "Muestra una vista previa de la cámara arrastrable",
        "mic-level": "Nivel de Micrófono",
        "start-recording": "Iniciar Grabación",
        "pause": "Pausar",
        "resume": "Reanudar",
        "stop": "Detener",
        "gallery-title": "Grabaciones Locales",
        "gallery-subtitle": "Guardado en el navegador, se puede exportar en cualquier momento",
        "gallery-empty-title": "Sin grabaciones",
        "gallery-empty-desc": "Haga clic en 'Iniciar grabación' para comenzar",
        "preview-title": "Vista previa de video",
        "delete": "Eliminar",
        "download-video": "Descargar Video",
        "btn-download": "Descargar",
        "btn-delete": "Eliminar",
        "toast-start-recording": "Grabación de pantalla iniciada",
        "toast-paused": "Grabación pausada",
        "toast-resumed": "Grabación reanudada",
        "toast-db-saved": "Video guardado en la galería local",
        "toast-db-failed": "Error al guardar en la base de datos, descargando directamente...",
        "toast-too-small": "Archivo de video demasiado pequeño, error al guardar",
        "toast-thumbnail": "Generando miniatura...",
        "toast-camera-active": "Cámara flotante activada",
        "toast-camera-failed": "No se puede acceder a la cámara",
        "toast-mic-failed": "Error al iniciar el micrófono. Grabando solo audio del sistema o sin sonido.",
        "toast-start-failed": "Error al iniciar grabación: ",
        "toast-downloading": "Iniciando descarga...",
        "toast-deleted": "Grabación eliminada",
        "toast-delete-failed": "Error al eliminar grabación",
        "toast-load-failed": "Error al cargar la lista de grabaciones",
        "confirm-delete": "¿Está seguro de que desea eliminar esta grabación?",
        "recording-name-default": "Grabación",
        "status-recording": "Grabando...",
        "status-paused": "Grabación Pausada",
    },
    fr: {
        "page-title": "AuraRecord - Enregistreur d'écran minimaliste & HD",
        "status-ready": "Système Prêt",
        "config-title": "Enregistrement",
        "config-subtitle": "Sélectionner les sources vidéo et audio",
        "video-quality": "Qualité Vidéo",
        "quality-hd": "1080p (HD)",
        "quality-sd": "720p (SD)",
        "frame-rate": "Images par seconde",
        "fps-smooth": "60 FPS (Fluide)",
        "fps-standard": "30 FPS (Standard)",
        "audio-source": "Sources Audio",
        "mic-toggle-title": "Microphone",
        "mic-toggle-desc": "Enregistrer votre voix depuis le micro",
        "sys-audio-title": "Audio Système",
        "sys-audio-desc": "Enregistrer le son interne lors du partage",
        "advanced-settings": "Fonctions Avancées",
        "webcam-toggle-title": "Incrustation Caméra",
        "webcam-toggle-desc": "Afficher un aperçu caméra déplaçable sur l'écran",
        "mic-level": "Niveau du Microphone",
        "start-recording": "Démarrer",
        "pause": "Pause",
        "resume": "Reprendre",
        "stop": "Arrêter",
        "gallery-title": "Enregistrements Locaux",
        "gallery-subtitle": "Enregistré localement dans le navigateur, exportable",
        "gallery-empty-title": "Aucun enregistrement",
        "gallery-empty-desc": "Cliquez sur 'Démarrer' pour commencer",
        "preview-title": "Aperçu Vidéo",
        "delete": "Supprimer",
        "download-video": "Télécharger la Vidéo",
        "btn-download": "Télécharger",
        "btn-delete": "Supprimer",
        "toast-start-recording": "Enregistrement démarré",
        "toast-paused": "Enregistrement suspendu",
        "toast-resumed": "Enregistrement repris",
        "toast-db-saved": "Enregistrement sauvegardé avec succès",
        "toast-db-failed": "Erreur d'enregistrement local, téléchargement direct...",
        "toast-too-small": "Fichier trop petit, échec de l'enregistrement",
        "toast-thumbnail": "Génération de la miniature...",
        "toast-camera-active": "Aperçu caméra activé",
        "toast-camera-failed": "Impossible d'accéder à la caméra",
        "toast-mic-failed": "Microphone indisponible. Audio système uniquement ou muet.",
        "toast-start-failed": "Échec du démarrage de l'enregistrement: ",
        "toast-downloading": "Téléchargement en cours...",
        "toast-deleted": "Enregistrement supprimé",
        "toast-delete-failed": "Échec de la suppression de l'enregistrement",
        "toast-load-failed": "Échec du chargement des enregistrements",
        "confirm-delete": "Voulez-vous vraiment supprimer cet enregistrement ?",
        "recording-name-default": "Enregistrement",
        "status-recording": "Enregistrement...",
        "status-paused": "Enregistrement Suspendu",
    },
    de: {
        "page-title": "AuraRecord - Minimalistischer HD-Bildschirmrekorder",
        "status-ready": "Bereit",
        "config-title": "Aufnahme-Einstellungen",
        "config-subtitle": "Video- und Audioquellen auswählen",
        "video-quality": "Qualität",
        "quality-hd": "1080p (HD)",
        "quality-sd": "720p (SD)",
        "frame-rate": "Bildrate",
        "fps-smooth": "60 FPS (Flüssig)",
        "fps-standard": "30 FPS (Standard)",
        "audio-source": "Audioquellen",
        "mic-toggle-title": "Mikrofon",
        "mic-toggle-desc": "Ihre Sprache über das Mikrofon aufnehmen",
        "sys-audio-title": "Systemaudio",
        "sys-audio-desc": "Internes Audio bei Bildschirmfreigabe aufnehmen",
        "advanced-settings": "Erweiterte Funktionen",
        "webcam-toggle-title": "Webcam-Overlay",
        "webcam-toggle-desc": "Ziehbares Webcam-Fenster auf der Seite anzeigen",
        "mic-level": "Mikrofonpegel",
        "start-recording": "Aufnahme Starten",
        "pause": "Pause",
        "resume": "Fortsetzen",
        "stop": "Stoppen",
        "gallery-title": "Lokale Aufnahmen",
        "gallery-subtitle": "Wird im Browser gespeichert, jederzeit exportierbar",
        "gallery-empty-title": "Keine Aufnahmen vorhanden",
        "gallery-empty-desc": "Klicken Sie links auf 'Aufnahme Starten'",
        "preview-title": "Videovorschau",
        "delete": "Löschen",
        "download-video": "Video herunterladen",
        "btn-download": "Download",
        "btn-delete": "Löschen",
        "toast-start-recording": "Bildschirmaufnahme gestartet",
        "toast-paused": "Aufnahme pausiert",
        "toast-resumed": "Aufnahme fortgesetzt",
        "toast-db-saved": "Video in der lokalen Bibliothek gespeichert",
        "toast-db-failed": "Fehler beim Speichern in DB, direkter Download...",
        "toast-too-small": "Videodatei zu klein, Speichern fehlgeschlagen",
        "toast-thumbnail": "Miniaturansicht generieren...",
        "toast-camera-active": "Webcam-Vorschau aktiviert",
        "toast-camera-failed": "Zugriff auf Kamera gefolgt",
        "toast-mic-failed": "Mikrofon nicht verfügbar. Aufnahme stumm oder nur Systemton.",
        "toast-start-failed": "Aufnahmestart fehlgeschlagen: ",
        "toast-downloading": "Video wird heruntergeladen...",
        "toast-deleted": "Aufnahme gelöscht",
        "toast-delete-failed": "Löschen fehlgeschlagen",
        "toast-load-failed": "Laden der Bibliothek fehlgeschlagen",
        "confirm-delete": "Sind Sie sicher, dass Sie diese Aufnahme löschen möchten?",
        "recording-name-default": "Aufnahme",
        "status-recording": "Aufnahme läuft...",
        "status-paused": "Aufnahme Pausiert",
    },
    pt: {
        "page-title": "AuraRecord - Gravador de tela minimalista e HD",
        "status-ready": "Sistema Pronto",
        "config-title": "Configuração",
        "config-subtitle": "Selecione as fontes de vídeo e áudio",
        "video-quality": "Qualidade do vídeo",
        "quality-hd": "1080p (HD)",
        "quality-sd": "720p (SD)",
        "frame-rate": "Taxa de quadros",
        "fps-smooth": "60 FPS (Suave)",
        "fps-standard": "30 FPS (Padrão)",
        "audio-source": "Fontes de Áudio",
        "mic-toggle-title": "Microfone",
        "mic-toggle-desc": "Gravar sua voz do microfone",
        "sys-audio-title": "Áudio do Sistema",
        "sys-audio-desc": "Gravar som interno durante o compartilhamento",
        "advanced-settings": "Auxílios Avançados",
        "webcam-toggle-title": "Sobreposição Webcam",
        "webcam-toggle-desc": "Mostrar uma câmera arrastável flutuando na página",
        "mic-level": "Nível do Microfone",
        "start-recording": "Iniciar Gravação",
        "pause": "Pausar",
        "resume": "Retomar",
        "stop": "Parar",
        "gallery-title": "Gravações Locais",
        "gallery-subtitle": "Salvo no navegador, exportável a qualquer momento",
        "gallery-empty-title": "Nenhuma gravação",
        "gallery-empty-desc": "Clique em 'Iniciar gravação' para começar",
        "preview-title": "Visualização do Vídeo",
        "delete": "Excluir",
        "download-video": "Baixar Vídeo",
        "btn-download": "Baixar",
        "btn-delete": "Excluir",
        "toast-start-recording": "Gravação de tela iniciada",
        "toast-paused": "Gravação pausada",
        "toast-resumed": "Gravação retomada",
        "toast-db-saved": "Vídeo salvo na galeria local",
        "toast-db-failed": "Erro ao salvar na base de dados, baixando diretamente...",
        "toast-too-small": "Arquivo de vídeo muito pequeno, erro ao salvar",
        "toast-thumbnail": "Gerando miniatura...",
        "toast-camera-active": "Câmera flutuante ativada",
        "toast-camera-failed": "Não foi possível acessar a câmera",
        "toast-mic-failed": "Microfone indisponível. Gravando apenas áudio do sistema ou sem som.",
        "toast-start-failed": "Falha ao iniciar gravação: ",
        "toast-downloading": "Iniciando download do vídeo...",
        "toast-deleted": "Gravação excluída",
        "toast-delete-failed": "Erro ao excluir vídeo",
        "toast-load-failed": "Falha ao carregar lista de gravações",
        "confirm-delete": "Tem certeza de que deseja excluir esta gravação?",
        "recording-name-default": "Gravação",
        "status-recording": "Gravando...",
        "status-paused": "Gravação Pausada",
    }
};

const I18n = {
    current: 'en',
    languages: LANGUAGES,
    
    init() {
        // Detect system language
        let lang = localStorage.getItem('aura-lang');
        if (!lang) {
            const systemLangs = navigator.languages || [navigator.language];
            for (let sysLang of systemLangs) {
                sysLang = sysLang.toLowerCase();
                if (sysLang.startsWith('zh-tw') || sysLang.startsWith('zh-hk') || sysLang.startsWith('zh-hant')) {
                    lang = 'zh-TW';
                    break;
                } else if (sysLang.startsWith('zh')) {
                    lang = 'zh-CN';
                    break;
                } else if (sysLang.startsWith('ja')) {
                    lang = 'ja';
                    break;
                } else if (sysLang.startsWith('ko')) {
                    lang = 'ko';
                    break;
                } else if (sysLang.startsWith('es')) {
                    lang = 'es';
                    break;
                } else if (sysLang.startsWith('fr')) {
                    lang = 'fr';
                    break;
                } else if (sysLang.startsWith('de')) {
                    lang = 'de';
                    break;
                } else if (sysLang.startsWith('pt')) {
                    lang = 'pt';
                    break;
                } else if (sysLang.startsWith('en')) {
                    lang = 'en';
                    break;
                }
            }
        }
        
        this.current = lang || 'en';
        
        // Setup dropdown state
        const select = document.getElementById('lang-select');
        if (select) {
            select.value = this.current;
            select.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
        
        this.localizeDOM();
    },
    
    setLanguage(lang) {
        if (this.languages[lang]) {
            this.current = lang;
            localStorage.setItem('aura-lang', lang);
            this.localizeDOM();
            
            if (window.appInstance) {
                window.appInstance.onLanguageChanged();
            }
        }
    },
    
    t(key) {
        const dict = this.languages[this.current] || this.languages['en'];
        return dict[key] || this.languages['en'][key] || key;
    },
    
    localizeDOM() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation) {
                // To avoid breaking inner SVGs inside buttons/tags,
                // update the text node specifically if it exists, otherwise update textContent.
                const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                if (textNode) {
                    textNode.textContent = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Dynamically update document title
        document.title = this.t('page-title');
    }
};

// --- Constants & Configs ---
const DB_NAME = 'AuraRecordDB';
const DB_VERSION = 1;
const STORE_NAME = 'recordings';

// --- Toast System ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Icon mapping
    let icon = '';
    if (type === 'success') {
        icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'error') {
        icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else {
        icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    
    // Animate out and remove
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 4000);
}

// --- Database Engine (IndexedDB) ---
class Database {
    static open() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            
            request.onupgradeneeded = (e) => {
                const db = request.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
            };
        });
    }

    static async getRecordings() {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();
            
            request.onsuccess = () => {
                const recordings = request.result || [];
                recordings.sort((a, b) => new Date(b.date) - new Date(a.date));
                resolve(recordings);
            };
            request.onerror = () => reject(request.error);
        });
    }

    static async saveRecording(recording) {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.put(recording);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    static async deleteRecording(id) {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.delete(id);
            
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
}

// --- Video Recorder Controller ---
class ScreenRecorder {
    constructor() {
        this.stream = null;
        this.micStream = null;
        this.screenStream = null;
        this.audioContext = null;
        this.mediaRecorder = null;
        this.recordedChunks = [];
        this.state = 'idle'; // idle, recording, paused
        
        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerInterval = null;

        // Callback hooks
        this.onStateChange = null;
        this.onTimerUpdate = null;
        this.onStop = null;
    }

    async start(options) {
        if (this.state !== 'idle') return;

        try {
            this.recordedChunks = [];
            
            const videoWidth = options.quality === '1080p' ? 1920 : 1280;
            const videoHeight = options.quality === '1080p' ? 1080 : 720;
            const frameRate = parseInt(options.fps);
            
            const displayConstraints = {
                video: {
                    width: { ideal: videoWidth },
                    height: { ideal: videoHeight },
                    frameRate: { ideal: frameRate }
                },
                audio: options.systemAudio ? {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false
                } : false
            };

            this.screenStream = await navigator.mediaDevices.getDisplayMedia(displayConstraints);
            
            this.screenStream.getVideoTracks()[0].onended = () => {
                this.stop();
            };

            if (options.mic) {
                try {
                    this.micStream = await navigator.mediaDevices.getUserMedia({
                        audio: {
                            echoCancellation: true,
                            noiseSuppression: true,
                            autoGainControl: true
                        }
                    });
                } catch (micErr) {
                    showToast(I18n.t('toast-mic-failed'), 'warning');
                    this.micStream = null;
                }
            }

            const audioTracks = [];
            const hasScreenAudio = this.screenStream.getAudioTracks().length > 0;
            const hasMicAudio = this.micStream && this.micStream.getAudioTracks().length > 0;

            if (hasScreenAudio || hasMicAudio) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const destination = this.audioContext.createMediaStreamDestination();

                if (hasScreenAudio) {
                    const screenSource = this.audioContext.createMediaStreamSource(this.screenStream);
                    screenSource.connect(destination);
                }

                if (hasMicAudio) {
                    const micSource = this.audioContext.createMediaStreamSource(this.micStream);
                    
                    this.analyser = this.audioContext.createAnalyser();
                    this.analyser.fftSize = 256;
                    micSource.connect(this.analyser);
                    
                    micSource.connect(destination);
                }

                const mixedAudioTrack = destination.stream.getAudioTracks()[0];
                if (mixedAudioTrack) {
                    audioTracks.push(mixedAudioTrack);
                }
            }

            const videoTrack = this.screenStream.getVideoTracks()[0];
            const combinedStream = new MediaStream([videoTrack, ...audioTracks]);
            this.stream = combinedStream;

            let optionsCodec = { mimeType: 'video/webm;codecs=vp9,opus' };
            if (!MediaRecorder.isTypeSupported(optionsCodec.mimeType)) {
                optionsCodec = { mimeType: 'video/webm;codecs=vp8,opus' };
                if (!MediaRecorder.isTypeSupported(optionsCodec.mimeType)) {
                    optionsCodec = { mimeType: 'video/webm' };
                }
            }

            this.mediaRecorder = new MediaRecorder(this.stream, optionsCodec);
            
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    this.recordedChunks.push(event.data);
                }
            };

            this.mediaRecorder.onstop = () => {
                this._handleRecordingComplete(options.quality, frameRate);
            };

            this.mediaRecorder.start(1000);
            this.state = 'recording';
            this.startTime = Date.now();
            this.elapsedTime = 0;
            this._startTimer();
            
            if (this.onStateChange) this.onStateChange(this.state);
            showToast(I18n.t('toast-start-recording'), 'success');

        } catch (err) {
            console.error('Start Recording Error:', err);
            this.cleanup();
            if (err.name !== 'NotAllowedError') {
                showToast(`${I18n.t('toast-start-failed')}${err.message}`, 'error');
            }
            this.state = 'idle';
            if (this.onStateChange) this.onStateChange(this.state);
        }
    }

    pause() {
        if (this.state !== 'recording') return;
        this.mediaRecorder.pause();
        this.state = 'paused';
        clearInterval(this.timerInterval);
        if (this.onStateChange) this.onStateChange(this.state);
        showToast(I18n.t('toast-paused'), 'info');
    }

    resume() {
        if (this.state !== 'paused') return;
        this.mediaRecorder.resume();
        this.state = 'recording';
        this.startTime = Date.now() - this.elapsedTime;
        this._startTimer();
        if (this.onStateChange) this.onStateChange(this.state);
        showToast(I18n.t('toast-resumed'), 'success');
    }

    stop() {
        if (this.state === 'idle') return;
        
        try {
            if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
                this.mediaRecorder.stop();
            }
        } catch (e) {
            console.error(e);
        }
        
        this.state = 'idle';
        clearInterval(this.timerInterval);
        if (this.onStateChange) this.onStateChange(this.state);
    }

    _startTimer() {
        this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            if (this.onTimerUpdate) this.onTimerUpdate(this.elapsedTime);
        }, 100);
    }

    async _handleRecordingComplete(quality, fps) {
        const videoBlob = new Blob(this.recordedChunks, { type: 'video/webm' });
        
        this.cleanup();

        if (videoBlob.size < 500) {
            showToast(I18n.t('toast-too-small'), 'error');
            return;
        }

        const id = 'rec_' + Date.now();
        const durationFormatted = this._formatDuration(this.elapsedTime);
        
        showToast(I18n.t('toast-thumbnail'), 'info');
        const thumbnail = await this._generateThumbnail(videoBlob);
        
        const recordingData = {
            id,
            name: `${I18n.t('recording-name-default')} - ${new Date().toLocaleString()}`,
            blob: videoBlob,
            duration: durationFormatted,
            durationMs: this.elapsedTime,
            size: videoBlob.size,
            date: new Date().toISOString(),
            quality,
            fps,
            thumbnail
        };

        try {
            await Database.saveRecording(recordingData);
            showToast(I18n.t('toast-db-saved'), 'success');
            if (this.onStop) this.onStop(recordingData);
        } catch (dbErr) {
            console.error('Save to DB error:', dbErr);
            showToast(I18n.t('toast-db-failed'), 'warning');
            this._downloadBlob(videoBlob, `${id}.webm`);
        }
    }

    _downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    _generateThumbnail(blob) {
        return new Promise((resolve) => {
            const video = document.createElement('video');
            const url = URL.createObjectURL(blob);
            
            video.src = url;
            video.muted = true;
            video.playsInline = true;
            
            video.onloadeddata = () => {
                video.currentTime = Math.min(video.duration / 2, 0.5);
            };

            video.onseeked = () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = 640;
                    canvas.height = 360;
                    const ctx = canvas.getContext('2d');
                    
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    
                    URL.revokeObjectURL(url);
                    resolve(dataUrl);
                } catch (e) {
                    console.error('Thumbnail generation error', e);
                    URL.revokeObjectURL(url);
                    resolve(null);
                }
            };

            video.onerror = () => {
                URL.revokeObjectURL(url);
                resolve(null);
            };
        });
    }

    _formatDuration(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

        const pad = (num) => String(num).padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    cleanup() {
        if (this.screenStream) {
            this.screenStream.getTracks().forEach(track => track.stop());
            this.screenStream = null;
        }
        if (this.micStream) {
            this.micStream.getTracks().forEach(track => track.stop());
            this.micStream = null;
        }
        if (this.audioContext && this.audioContext.state !== 'closed') {
            this.audioContext.close();
            this.audioContext = null;
        }
        this.stream = null;
        this.analyser = null;
    }
}

// --- Draggable Webcam Manager ---
class WebcamOverlay {
    constructor(containerId, videoId, toggleInputId) {
        this.container = document.getElementById(containerId);
        this.video = document.getElementById(videoId);
        this.toggleInput = document.getElementById(toggleInputId);
        this.stream = null;
        
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        
        this.init();
    }

    init() {
        this.toggleInput.addEventListener('change', async () => {
            if (this.toggleInput.checked) {
                await this.start();
            } else {
                this.stop();
            }
        });

        const dragHandle = this.container.querySelector('.webcam-drag-handle');
        
        const onMouseDown = (e) => {
            this.isDragging = true;
            this.startX = e.clientX - this.container.offsetLeft;
            this.startY = e.clientY - this.container.offsetTop;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            e.preventDefault();
        };

        const onMouseMove = (e) => {
            if (!this.isDragging) return;
            let left = e.clientX - this.startX;
            let top = e.clientY - this.startY;

            const maxLeft = window.innerWidth - this.container.offsetWidth;
            const maxTop = window.innerHeight - this.container.offsetHeight;
            
            left = Math.max(0, Math.min(left, maxLeft));
            top = Math.max(0, Math.min(top, maxTop));
            
            this.container.style.left = `${left}px`;
            this.container.style.top = `${top}px`;
            this.container.style.bottom = 'auto';
            this.container.style.right = 'auto';
        };

        const onMouseUp = () => {
            this.isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        this.container.addEventListener('mousedown', onMouseDown);
        
        this.container.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            this.isDragging = true;
            this.startX = touch.clientX - this.container.offsetLeft;
            this.startY = touch.clientY - this.container.offsetTop;
        }, { passive: true });

        this.container.addEventListener('touchmove', (e) => {
            if (!this.isDragging) return;
            const touch = e.touches[0];
            let left = touch.clientX - this.startX;
            let top = touch.clientY - this.startY;
            
            const maxLeft = window.innerWidth - this.container.offsetWidth;
            const maxTop = window.innerHeight - this.container.offsetHeight;
            
            left = Math.max(0, Math.min(left, maxLeft));
            top = Math.max(0, Math.min(top, maxTop));
            
            this.container.style.left = `${left}px`;
            this.container.style.top = `${top}px`;
            this.container.style.bottom = 'auto';
            this.container.style.right = 'auto';
        }, { passive: true });

        this.container.addEventListener('touchend', () => {
            this.isDragging = false;
        });
    }

    async start() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 480 },
                    height: { ideal: 480 },
                    facingMode: 'user'
                },
                audio: false
            });
            this.video.srcObject = this.stream;
            this.container.classList.remove('hidden');
            showToast(I18n.t('toast-camera-active'), 'info');
        } catch (err) {
            console.error('Camera access error:', err);
            showToast(I18n.t('toast-camera-failed'), 'error');
            this.toggleInput.checked = false;
        }
    }

    stop() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        this.video.srcObject = null;
        this.container.classList.add('hidden');
    }
}

// --- Core UI Controller ---
class UIApp {
    constructor() {
        this.recorder = new ScreenRecorder();
        this.webcam = new WebcamOverlay('webcam-container', 'webcam-preview', 'toggle-webcam');
        
        // Element Bindings
        this.btnRecordStart = document.getElementById('btn-record-start');
        this.recControls = document.getElementById('rec-controls');
        this.btnRecordPause = document.getElementById('btn-record-pause');
        this.btnRecordStop = document.getElementById('btn-record-stop');
        this.timerDisplay = document.getElementById('timer');
        this.statusDot = document.querySelector('.status-dot');
        this.statusText = document.querySelector('.status-text');
        
        // Settings Inputs
        this.toggleMic = document.getElementById('toggle-mic');
        this.toggleSysAudio = document.getElementById('toggle-system-audio');
        
        // Visualizer Canvas
        this.canvas = document.getElementById('audio-visualizer');
        this.canvasCtx = this.canvas.getContext('2d');
        this.visualizerBox = document.getElementById('mic-visualizer-box');
        this.dbMeter = document.getElementById('db-meter');
        this.animationId = null;

        // Gallery Elements
        this.galleryGrid = document.getElementById('gallery-grid');
        this.galleryEmpty = document.getElementById('gallery-empty');

        // Modal Elements
        this.previewModal = document.getElementById('preview-modal');
        this.modalPlayer = document.getElementById('modal-video-player');
        this.modalTitle = document.getElementById('modal-title');
        this.modalDuration = document.getElementById('modal-duration');
        this.modalSize = document.getElementById('modal-size');
        this.btnModalClose = document.getElementById('btn-modal-close');
        this.btnModalDelete = document.getElementById('btn-modal-delete');
        this.btnModalDownload = document.getElementById('btn-modal-download');
        this.currentPreviewItem = null;

        this.init();
    }

    init() {
        this.recorder.onStateChange = (state) => this._updateRecordingUI(state);
        this.recorder.onTimerUpdate = (ms) => this._updateTimer(ms);
        this.recorder.onStop = () => this.refreshGallery();

        this.btnRecordStart.addEventListener('click', () => {
            const quality = document.querySelector('input[name="quality"]:checked').value;
            const fps = document.querySelector('input[name="fps"]:checked').value;
            const mic = this.toggleMic.checked;
            const systemAudio = this.toggleSysAudio.checked;

            this.recorder.start({ quality, fps, mic, systemAudio });
        });

        this.btnRecordPause.addEventListener('click', () => {
            if (this.recorder.state === 'recording') {
                this.recorder.pause();
            } else if (this.recorder.state === 'paused') {
                this.recorder.resume();
            }
        });

        this.btnRecordStop.addEventListener('click', () => {
            this.recorder.stop();
        });

        this.toggleMic.addEventListener('change', () => {
            this._checkVisualizerState();
        });

        this.btnModalClose.addEventListener('click', () => this.closePreviewModal());
        this.btnModalDelete.addEventListener('click', () => this.deleteCurrentItem());
        this.btnModalDownload.addEventListener('click', () => this.downloadCurrentItem());

        this.refreshGallery();
        this._checkVisualizerState();
        this._resizeCanvas();
        window.addEventListener('resize', () => this._resizeCanvas());
    }

    onLanguageChanged() {
        this.refreshGallery();
        this._updateRecordingUI(this.recorder.state);
    }

    _updateRecordingUI(state) {
        if (state === 'recording') {
            this.btnRecordStart.classList.add('hidden');
            this.recControls.classList.remove('hidden');
            this.btnRecordPause.querySelector('span').textContent = I18n.t('pause');
            this.btnRecordPause.querySelector('svg').innerHTML = `
                <rect x="5" y="4" width="4" height="16" rx="1"/>
                <rect x="15" y="4" width="4" height="16" rx="1"/>`;

            this.timerDisplay.className = 'timer-display recording';
            
            this.statusDot.className = 'status-dot red';
            this.statusText.textContent = I18n.t('status-recording');
            
            if (this.recorder.analyser) {
                this.visualizerBox.classList.add('active');
                this._drawVisualizer();
            }
        } else if (state === 'paused') {
            this.btnRecordPause.querySelector('span').textContent = I18n.t('resume');
            this.btnRecordPause.querySelector('svg').innerHTML = `
                <polygon points="5 3 19 12 5 21 5 3"/>`;
            
            this.timerDisplay.className = 'timer-display paused';
            this.statusText.textContent = I18n.t('status-paused');
            this.statusDot.className = 'status-dot warning';
            
            cancelAnimationFrame(this.animationId);
            this.dbMeter.textContent = '-- dB';
        } else { // idle
            this.btnRecordStart.classList.remove('hidden');
            this.recControls.classList.add('hidden');
            this.timerDisplay.className = 'timer-display';
            this.timerDisplay.textContent = '00:00:00';
            
            this.statusDot.className = 'status-dot green';
            this.statusText.textContent = I18n.t('status-ready');
            
            this.visualizerBox.classList.remove('active');
            cancelAnimationFrame(this.animationId);
            this._checkVisualizerState();
        }
    }

    _updateTimer(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

        const pad = (num) => String(num).padStart(2, '0');
        this.timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    _resizeCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width - 32;
        this.canvas.height = 48;
    }

    async _checkVisualizerState() {
        if (this.recorder.state !== 'idle') return;

        if (this.toggleMic.checked) {
            try {
                this.tempMicStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.tempCtx = new (window.AudioContext || window.webkitAudioContext)();
                const source = this.tempCtx.createMediaStreamSource(this.tempMicStream);
                this.tempAnalyser = this.tempCtx.createAnalyser();
                this.tempAnalyser.fftSize = 256;
                source.connect(this.tempAnalyser);
                
                this.visualizerBox.classList.add('active');
                this._drawIdleVisualizer();
            } catch (err) {
                console.error(err);
                this.visualizerBox.classList.remove('active');
                this.toggleMic.checked = false;
                this._clearCanvas();
            }
        } else {
            this._closeTempMic();
            this.visualizerBox.classList.remove('active');
            this._clearCanvas();
            this.dbMeter.textContent = '-- dB';
        }
    }

    _closeTempMic() {
        if (this.tempMicStream) {
            this.tempMicStream.getTracks().forEach(track => track.stop());
            this.tempMicStream = null;
        }
        if (this.tempCtx && this.tempCtx.state !== 'closed') {
            this.tempCtx.close();
            this.tempCtx = null;
        }
        this.tempAnalyser = null;
        cancelAnimationFrame(this.animationId);
    }

    _clearCanvas() {
        this.canvasCtx.fillStyle = '#0b0f19';
        this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _drawVisualizer() {
        if (!this.recorder.analyser) return;
        
        const bufferLength = this.recorder.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        const draw = () => {
            if (this.recorder.state !== 'recording') return;
            this.animationId = requestAnimationFrame(draw);
            
            this.recorder.analyser.getByteFrequencyData(dataArray);
            this._renderBars(bufferLength, dataArray);
        };
        
        draw();
    }

    _drawIdleVisualizer() {
        if (!this.tempAnalyser) return;
        
        const bufferLength = this.tempAnalyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        const draw = () => {
            this.animationId = requestAnimationFrame(draw);
            
            this.tempAnalyser.getByteFrequencyData(dataArray);
            this._renderBars(bufferLength, dataArray);
        };
        
        draw();
    }

    _renderBars(bufferLength, dataArray) {
        this._clearCanvas();

        const barWidth = (this.canvas.width / bufferLength) * 1.6;
        let barHeight;
        let x = 0;

        let total = 0;
        for (let i = 0; i < bufferLength; i++) {
            barHeight = (dataArray[i] / 255) * this.canvas.height;
            total += dataArray[i];

            const percent = barHeight / this.canvas.height;
            const r = Math.floor(6 + percent * 10);
            const g = Math.floor(182 + percent * 50);
            const b = Math.floor(212 + percent * 40);

            this.canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            this.canvasCtx.fillRect(x, this.canvas.height - barHeight, barWidth - 1, barHeight);

            x += barWidth;
        }

        const average = total / bufferLength;
        const db = average > 0 ? Math.round(20 * Math.log10(average / 255)) : -100;
        this.dbMeter.textContent = db === -100 ? '-∞ dB' : `${db} dB`;
    }

    async refreshGallery() {
        this._closeTempMic();
        this._checkVisualizerState();

        try {
            const items = await Database.getRecordings();
            
            if (items.length === 0) {
                this.galleryEmpty.classList.remove('hidden');
                this.galleryGrid.classList.add('hidden');
                return;
            }

            this.galleryEmpty.classList.add('hidden');
            this.galleryGrid.classList.remove('hidden');
            this.galleryGrid.innerHTML = '';

            items.forEach(item => {
                const card = this._createGalleryCard(item);
                this.galleryGrid.appendChild(card);
            });
        } catch (err) {
            console.error('Gallery loading failed', err);
            showToast(I18n.t('toast-load-failed'), 'error');
        }
    }

    _createGalleryCard(item) {
        const card = document.createElement('div');
        card.className = 'gallery-item';
        card.dataset.id = item.id;

        const sizeMB = (item.size / (1024 * 1024)).toFixed(1);
        const recordDate = new Date(item.date).toLocaleDateString();

        card.innerHTML = `
            <div class="thumb-container">
                ${item.thumbnail 
                    ? `<img class="thumb-video" src="${item.thumbnail}" alt="Thumbnail">` 
                    : `<div class="thumb-video"></div>`}
                <div class="play-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                </div>
                <span class="tag-badge quality-tag">${item.quality} (${item.fps}fps)</span>
                <span class="tag-badge">${item.duration}</span>
            </div>
            <div class="item-info">
                <div class="item-title" title="${item.name}">${item.name}</div>
                <div class="item-meta">
                    <span>${recordDate}</span>
                    <span>${sizeMB} MB</span>
                </div>
            </div>
            <div class="item-actions">
                <button class="btn-item btn-item-download" title="${I18n.t('btn-download')}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    ${I18n.t('btn-download')}
                </button>
                <button class="btn-item btn-item-delete" title="${I18n.t('btn-delete')}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                    ${I18n.t('btn-delete')}
                </button>
            </div>
        `;

        card.querySelector('.thumb-container').addEventListener('click', () => {
            this.openPreviewModal(item);
        });

        card.querySelector('.btn-item-download').addEventListener('click', (e) => {
            e.stopPropagation();
            this._downloadRecording(item);
        });

        card.querySelector('.btn-item-delete').addEventListener('click', (e) => {
            e.stopPropagation();
            this._deleteRecording(item.id);
        });

        return card;
    }

    openPreviewModal(item) {
        this._closeTempMic();
        
        this.currentPreviewItem = item;
        this.modalTitle.textContent = item.name;
        
        const sizeMB = (item.size / (1024 * 1024)).toFixed(1);
        this.modalDuration.textContent = item.duration;
        this.modalSize.textContent = `${sizeMB} MB`;

        const url = URL.createObjectURL(item.blob);
        this.modalPlayer.src = url;
        
        this.previewModal.classList.remove('hidden');
    }

    closePreviewModal() {
        this.previewModal.classList.add('hidden');
        
        if (this.modalPlayer.src) {
            URL.revokeObjectURL(this.modalPlayer.src);
            this.modalPlayer.src = '';
        }
        
        this.currentPreviewItem = null;
        this._checkVisualizerState();
    }

    async deleteCurrentItem() {
        if (!this.currentPreviewItem) return;
        const confirmDelete = confirm(I18n.t('confirm-delete'));
        if (confirmDelete) {
            const id = this.currentPreviewItem.id;
            this.closePreviewModal();
            await this._deleteRecording(id);
        }
    }

    downloadCurrentItem() {
        if (!this.currentPreviewItem) return;
        this._downloadRecording(this.currentPreviewItem);
    }

    _downloadRecording(item) {
        const url = URL.createObjectURL(item.blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${item.name.replace(/\s+/g, '_')}.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(I18n.t('toast-downloading'), 'success');
    }

    async _deleteRecording(id) {
        try {
            await Database.deleteRecording(id);
            showToast(I18n.t('toast-deleted'), 'info');
            this.refreshGallery();
        } catch (err) {
            console.error('Delete error:', err);
            showToast(I18n.t('toast-delete-failed'), 'error');
        }
    }
}

// Instantiate App
window.addEventListener('DOMContentLoaded', () => {
    I18n.init();
    window.appInstance = new UIApp();
});
