document.addEventListener('DOMContentLoaded', function() {
    const ageVerified = localStorage.getItem('ageVerified');
    const currentPage = window.location.pathname;

    if (!ageVerified) {
        // Create modal dynamically if it doesn't exist
        if (!document.getElementById('ageVerificationModal')) {
            createModal();
        }

        const ageModal = new bootstrap.Modal(document.getElementById('ageVerificationModal'), {
            backdrop: 'static',
            keyboard: false
        });
        ageModal.show();

        document.getElementById('noButton').addEventListener('click', function() {
            window.location.href = 'https://www.tofugu.com/';
        });

        document.getElementById('yesButton').addEventListener('click', function() {
            localStorage.setItem('ageVerified', 'true');
            ageModal.hide();
        });
    }
});

function createModal() {
    const modalHTML = `
        <div class="modal fade" id="ageVerificationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ageVerificationModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content satori-modal">
                    <div class="modal-header satori-modal-header">
                        <h5 class="modal-title" id="ageVerificationModalLabel">Age Verification</h5>
                    </div>
                    <div class="modal-body satori-modal-body">
                        <p>Are you 21 years of age or older?</p>
                    </div>
                    <div class="modal-footer satori-modal-footer">
                        <button type="button" class="btn satori-btn-secondary" id="noButton">No</button>
                        <button type="button" class="btn satori-btn-primary" id="yesButton">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}