
                var modal = document.getElementById("myModal");
                var closeModalBtn = document.getElementById("closeModalBtn");
        
                // Function to open the modal and display card data dynamically
                function openModal(event) {
                    var card = event.target.closest(".cardd"); // Get the parent card of the clicked button
                    var cardTitle = "SELECT PAYMENT METHOD";
                    var cardInfo = card.querySelectorAll(".info p");
                    var cardInfoText = Array.from(cardInfo).map((p) => p.innerText);
                    var href1 = card.getAttribute("data-href1");
                    var href2 = card.getAttribute("data-href2");
                    var href3 = card.getAttribute("data-href3");
                    var href4 = card.getAttribute("data-href4"); // Added data-href4 for Paypal
        
                    // Extract individual parts from the "3 Day, Week, Month" string
                    var parts = cardInfoText[0].split(", ");
                    var buttonsHTML = parts.map((part, index) => {
                        return `<a href="${index === 0 ? href1 : index === 1 ? href2 : href3}">
                                    <button style="background-color: red !important;" class="btn btn-set">${part}</button>
                                </a>`;
                    }).join('');
        
                    // Update the modal content dynamically
                    var modalTitle = modal.querySelector(".modal-header h3");
                    var modalBody = modal.querySelector(".modal-body");
                 
                        var modalFooter = modal.querySelector('.modal-footer');
                        modalBody.innerHTML=`
                        <div class="btn-footer">
                            <a href="${href3}" target="_blank">
                                <button style="background: #37ac6f !important;" class="btn btn-set btn-paypal">GiftCard / Steam Skin</button>
                            </a>

                            <a href="${href4}" target="_blank">
                            <button style = "background: #009cde !important;" class="btn btn-set btn-paypal">PayPal, Card and Crypto</button> 
                        </a>

                        <button id="cancelModalBtn" class="btn btn-secondary" onclick="closeModal()">Close</button>
                        </div>
                        `;
                    modal.style.display = "block";
                }
        
                function closeModal() {
                    modal.style.display = "none";
                }
        
                closeModalBtn.addEventListener("click", closeModal);
            