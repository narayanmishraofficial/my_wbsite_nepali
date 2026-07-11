/* ===== Preloader ===== */
.preloader {
    position: fixed;
    inset: 0;
    background: #0F172A;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}
.preloader.hide {
    opacity: 0;
    pointer-events: none;
}
.loader {
    width: 50px;
    height: 50px;
    border: 4px solid #1E293B;
    border-top-color: #2563EB;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}
@keyframes spin {
    to { transform: rotate(360deg); }
}
