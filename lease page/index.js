const links = document.querySelectorAll('.link')
const container = document.querySelector('.info-content')
const nextButton = document.querySelectorAll('.next-button')


const myLinks=[
    {
        id:0,
        details:`
                    <label for="name">Name</label>
                    <input name="name" type="text" placeholder="Name of equipment" required/>
                    <label for="description">decription</label>
                    <input name="description"type="text" placeholder="Brief description of equipment"required />
                    <label for="other">other</label>
                    <input name="other" type="text" placeholder="Optional details" required/>
                    <div class="button">
                        <button type="submit" class="next-button" onClick="moveToNext(1)">Next</button>
                        <a href=" #" class="cancel">Cancel</a>
                    </div>
               
                `
    },
    {
        id:1,
        details:`
                
                    <label for="price">Price($)</label>
                    <input name="price" type="text" placeholder="$1000" required />
                    <label for="payment">decription</label>
                    <input name="payment" list="methodOfPayment" type="text" placeholder="method of payment" required/>
                    <datalist id="methodOfPayment">
                        <option value="card">
                        <option value="transaction">
                        <option value="online">
                    </datalist>
                    <label for="delivery">Method of delivery</label>
                    <input name="delivery" list="methodOfdelivery" type="text" placeholder="method of delivery" required/>
                    <datalist id="methodOfdelivery">
                        <option value="vehicle">
                        <option value="ship">
                        <option value="order">
                    </datalist>
                    <label for="location">Location</label>
                    <input name="location" list="location" type="text" placeholder="method of payment" required/>
                    <datalist id="location">
                        <option value="Lagos">
                        <option value="Abuja">
                        <option value="Kaduna">
                        <option value="Kano">
                        <option value="Ibadan">
                    </datalist>
                    <div class="button">
                        <button type="submit" class="next-button" onClick="moveToNext(2)">Next</button>
                        <a href=" #" class="cancel">Cancel</a>
                    </div>
                
                `
    },
    {
        id:2,
        details:`
                    <label for="img"> Add atleast 1 photo for this category </p>
                    <input type="file" name="img" accept="image/*" />
                    <p>Each picture must not exceed 5 Mb Supported formats are *.jpg, *.gif and *.png</p>
                    <div class="button">
                        <button type="submit" class="next-button" onClick="moveToNext(3)">Next</button>
                        <a href=" #" class="cancel">Cancel</a>
                    </div>
                
                `
    },
    {
        id:3,
        details:`
                    <input type="text" placeHolder ="Edit" class="text-area" />
                    <div class="button">
                        <button type="submit" class="next-button">Proceed to Lease</button>
                        <a href=" #" class="cancel">Cancel</a>
                    </div>
               
                `
    }
]


    const activeLink = () =>{

        links.forEach((link ,index)=>{
            link.addEventListener('click',()=>{
                links.forEach((link) => link.classList.remove("active"))
                link.classList.add('active');
                const move = myLinks.map((link)=>{
                    if(link.id === index){
                        return link.details;
                    }
                }).join('');
                container.innerHTML = move;
                
            })
        })

    }
    activeLink();
    
    const moveToNext = (e) =>{

       
        const move = myLinks.map((link)=>{
            if(link.id === e){
                links.forEach((linki, index)=>{
                    linki.classList.remove("active");
                    if(index === e){
                        linki.classList.add('active');
                    }
                })
                return link.details;
            }
        }).join('');
        container.innerHTML = move;

    }

    
