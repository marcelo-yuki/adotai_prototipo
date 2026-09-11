// Dados Base Iniciais
        const initialDogs = [
            { id: 1, name: "Caramelo", sex: "Macho", age: "2 anos", breed: "Sem Raça Definida", city: "Itapetininga", img: "https://revistaoeste.com/oestegeral/wp-content/uploads/2025/06/cachorro-caramelo_1749242700989.jpg", desc: "Clássico brasileiro. Cheio de energia, muito carinhoso e amigável.", size: "médio", species: "cão", medical: "Totalmente vacinado, V10 e Raiva em dia.", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", past: "Encontrado abandonado próximo à rodovia, estava desnutrido mas hoje goza de saúde perfeita." },
            { id: 2, name: "Luna", sex: "Fêmea", age: "6 meses", breed: "Labrador Mix", city: "Tatuí", species: "cão", size: "grande", medical: "Vacinada, vermifugada.", castrated: false, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop", desc: "Filhote aprendendo a fazer xixi no lugar certo. Muito dócil e se dá bem com crianças.", past: "Nascida em uma ninhada de rua resgatada em um terreno baldio." },
            { id: 3, name: "Thor", sex: "Macho", age: "4 anos", breed: "Pitbull", city: "Itararé", species: "cão", size: "grande", medical: "Castrado, vacinado, exames cardíacos ok.", castrated: true, specialNeed: false, singlePet: true, purpose: "guarda", img: "https://media.istockphoto.com/id/1370010790/photo/pit-bull-dog-playing-and-having-fun-in-the-park-green-grass-wooden-stakes-around-selective.jpg?s=612x612&w=0&k=20&c=2BhKHzjGSTauuMVtrjEx6aDQrACAPV7iZ2ExQtxArzs=", desc: "Um gigante bobão. Excelente para guarda de território, porém muito amoroso com os donos.", past: "Retirado de situação de maus-tratos e negligência." },
            { id: 4, name: "Soneca", sex: "Macho", age: "5 anos", breed: "Gato Siamês", city: "Itapetininga", species: "gato", size: "pequeno", medical: "FIV/FELV negativo, amputação de uma patinha traseira (PCD).", castrated: true, specialNeed: true, singlePet: false, purpose: "companhia", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop", desc: "Gatinho de três patinhas extremamente carinhoso. Sua deficiência não impede de pular e brincar.", past: "Resgatado após atropelamento. Passou por cirurgia de amputação e está 100% recuperado." },
            { id: 5, name: "Bidu", sex: "Macho", age: "3 anos", breed: "Beagle", city: "Alambari", species: "cão", size: "médio", medical: "Vacinado e ativo.", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://www.zooplus.pt/magazine/wp-content/uploads/2018/06/beagle_2.webp", desc: "Curioso e fujão. Precisa de uma casa com muros altos. Excelente companheiro.", past: "Entregue pela antiga família por falta de espaço no apartamento." },
            { id: 6, name: "Mimi", sex: "Fêmea", age: "2 anos", breed: "Siamês", city: "Itapetininga", species: "gato", size: "pequeno", medical: "Vacinada e castrada", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600&auto=format&fit=crop", desc: "Carinhosa e tranquila. Ideal para apartamentos e pessoas que buscam companhia calma.", past: "Encontrada ainda filhote" },
            { id: 9, name: "Simba", sex: "Macho", age: "3 anos", breed: "Laranja SRD", city: "Itapeva", species: "gato", size: "médio", medical: "Castrado e saudável", castrated: true, specialNeed: false, singlePet: true, purpose: "companhia", img: "https://cobasiblog.blob.core.windows.net/production-ofc/2021/08/gato-laranja-conheca-6-racas-com-essa-caracteristica-2.webp", desc: "Independente e curioso. Ideal para quem já tem experiência com gatos.", past: "Vivias nas redondezas de um comércio local onde era alimentado, até ser recolhido para adoção responsável." },
            { id: 10, name: "Bolinha", sex: "Macho", age: "4 anos", breed: "Sem Raça Definida", city: "Boituva", species: "cão", size: "pequeno", medical: "Vacinado", castrated: false, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://s2-g1.glbimg.com/TdPTg4jg3ZqtmZtyFnuHehXLgmk=/0x314:720x1073/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/x/gU7r6UTvyFwLn5G5FlUg/whatsapp-image-2019-02-22-at-14.53.02.jpeg", desc: "Calmo e companheiro. Perfeito para apartamentos e rotina tranquila.", past: "Deixado em uma clínica veterinária por pessoas que o encontraram perdido. Ninguém reivindicou sua posse." },
            { id: 11, name: "Bidu", sex: "Macho", age: "8 meses", breed: "Vira-lata", city: "Capão Bonito", species: "cão", size: "médio", medical: "Vacinado. Diagnosticado com Megaesôfago (necessita comer em comedouro elevado/cadeira de Bailey).", castrated: false, specialNeed: true, singlePet: false, purpose: "companhia", img: "https://extra.globo.com/incoming/23952663-75f-7e9/w976h550-PROP/simba-.jpg", desc: "Filhote cheio de energia e curiosidade. Precisa de atenção e espaço para brincar.", past: "Resgatado desnutrido devido à sua condição crônica não tratada. Hoje está estável e se alimenta muito bem com os cuidados certos." },
            { id: 12, name: "Fred", sex: "Macho", age: "6 anos", breed: "Sem Raça Definida", city: "Sorocaba", species: "cão", size: "médio", medical: "Castrado e vacinado", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://www.patasdacasa.com.br/sites/default/files/styles/gallery_crop/public/vira-latas-peludos-deysi-aaano.JPG.webp?itok=sKOIzVnb", desc: "Tranquilo e muito apegado ao dono. Ideal para ambientes internos.", past: "Resgatado após o falecimento de seu antigo tutor idoso. Busca um recomeço em um lar calmo." },
            { id: 13, name: "Nina", sex: "Fêmea", age: "2 anos", breed: "Sem Raça Definida", city: "Itapetininga", species: "gato", size: "pequeno", medical: "Vacinada e castrada", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://blog.cobasi.com.br/wp-content/uploads/2018/10/raca-de-gato-1.jpg", desc: "Calma e silenciosa. Prefere ambientes tranquilos e sem muito movimento.", past: "Nasceu em uma colônia de gatos comunitários. Foi socializada e se adaptou perfeitamente à vida dentro de casa." },
            { id: 14, name: "Max", sex: "Macho", age: "3 anos", breed: "Rottweiler", city: "Tatuí", species: "cão", size: "grande", medical: "Vacinado", castrated: false, specialNeed: false, singlePet: true, purpose: "guarda", img: "https://objectstorage.sa-vinhedo-1.oraclecloud.com/n/axuh3s32sabm/b/cobasi-institutional-cms-bucket/o/prod/rottweiler_02.webp", desc: "Forte e protetor. Requer dono experiente e ambiente seguro.", past: "Entregue a uma ONG após o tutor não conseguir controlar seu tamanho e força por falta de espaço físico." },
            { id: 15, name: "Pipoca", sex: "Fêmea", age: "1 ano", breed: "Sem Raça Definida", city: "Alambari", species: "cão", size: "pequeno", medical: "Vacinada", castrated: false, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/sem-titulo_15.jpg", desc: "Brincalhona e sociável. Se adapta bem com outros animais.", past: "Encontrada correndo em uma estrada rural. É extremamente alegre e dócil com qualquer pessoa." },
            { id: 16, name: "Bolinha", sex: "Macho", age: "4 anos", breed: "Sem Raça Definida", city: "Itapetininga", species: "cão", size: "pequeno", medical: "Castrado, vacinado e cardiopata (necessita de medicação diária contínua).", castrated: true, specialNeed: true, singlePet: false, purpose: "companhia", img: "https://www.bemparana.com.br/wp-content/uploads/2023/07/hugo-papo-pet-vira-lata-e1690834033757.webp", desc: "Pequeno e tranquilo, ideal para quem mora em apartamento.", past: "Resgatado de uma situação de negligência. Seu sopro no coração foi descoberto nos exames de rotina da ONG e já está controlado." },
            { id: 17, name: "Rajado", sex: "Macho", age: "2 anos", breed: "Gato SRD", city: "Tatuí", species: "gato", size: "pequeno", medical: "Castrado", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://cdn6.campograndenews.com.br/uploads/noticias/2026/01/20/2a647e6b3a8cec9f3954dd1e36a9d311dcc0315c.jpeg", desc: "Independente, mas gosta de companhia no fim do dia.", past: "Resgatado do telhado de uma fábrica desativada. Demora alguns dias para confiar, mas depois se torna muito companheiro." },
            { id: 18, name: "Pretinha", sex: "Fêmea", age: "3 anos", breed: "Gato SRD", city: "Alambari", species: "gato", size: "pequeno", medical: "Vacinada", castrated: false, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://images.amigonaosecompra.com.br/unsafe/1176x0/d40a9676-ac8b-4f2e-a414-46a098a09559/2655fac0-d719-4fa6-a168-eb2045cb343d/2655fac0-d719-4fa6-a168-eb2045cb343d.jpg", desc: "Muito calma e silenciosa, ótima para ambientes tranquilos.", past: "Seguiu um morador até sua casa em uma noite de chuva. Foi acolhida temporariamente para encontrar um lar definitivo." },
            { id: 19, name: "Fred", sex: "Macho", age: "5 anos", breed: "Sem Raça Definida", city: "Itararé", species: "cão", size: "médio", medical: "Castrado e saudável", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://adotar.com.br/upload/2021-01/animais_imagem660988.jpg?w=700&format=webp", desc: "Mais velho e tranquilo, gosta de descanso e passeios leves.", past: "Viveu em um abrigo comunitário regional por 2 anos. É muito sociável com outros cães idosos." },
            { id: 20, name: "Lili", sex: "Fêmea", age: "8 meses", breed: "Pinscher", city: "Itapetininga", species: "cão", size: "pequeno", medical: "Vacinada", castrated: false, specialNeed: false, singlePet: true, purpose: "companhia", img: "https://img.olx.com.br/images/38/389612632615510.jpg", desc: "Pequena e alerta, ótima para companhia constante.", past: "Resgatada de um criador clandestino. Superou o medo inicial e agora é extremamente apegada a humanos." },
            { id: 21, name: "Tom", sex: "Macho", age: "1 ano", breed: "Gato SRD", city: "Capão Bonito", species: "gato", size: "pequeno", medical: "Vacinado e castrado", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://blog-static.petlove.com.br/wp-content/uploads/2024/03/28195636/gato-peludo-Petlove.jpg", desc: "Brincalhão e curioso, gosta de explorar a casa.", past: "Encontrado em um motor de carro quando era recém-nascido. Foi amamentado na mamadeira e adora colo." },
            { id: 22, name: "Bela", sex: "Fêmea", age: "2 anos", breed: "Sem Raça Definida", city: "Angatuba", species: "cão", size: "médio", medical: "Castrada", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIRiwLl-eEq0LRUoJg5f0sQkeJ2mHNMK8Uw&s", desc: "Carinhosa e companheira, se adapta fácil a rotina.", past: "Vivendo em uma guarita de condomínio onde os moradores cuidavam coletivamente. Entrou para a ONG para ganhar uma família real." },
            { id: 23, name: "Chico", sex: "Macho", age: "6 anos", breed: "Sem Raça Definida", city: "Tatuí", species: "cão", size: "médio", medical: "Vacinado. Cego de um olho devido a trauma antigo (não necessita colírios atuais).", castrated: false, specialNeed: true, singlePet: false, purpose: "companhia", img: "https://adotar.com.br/upload/2024-01/animais_imagem1080250.jpg?w=700&format=webp", desc: "Mais velho, calmo e muito fiel.", past: "Vítima de maus-tratos no passado, de onde resultou a lesão ocular. Foi reabilitado fisicamente e psicologicamente." },
            { id: 24, name: "Mimi", sex: "Fêmea", age: "3 anos", breed: "Gato SRD", city: "Itapetininga", species: "gato", size: "pequeno", medical: "Castrada", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://cdn.shopify.com/s/files/1/0500/8965/6473/files/pexels-arina-krasnikova-7726295_480x480.jpg?v=1663249037", desc: "Carinhosa, adora colo e ambientes calmos.", past: "Resgatada após entrar no quintal de uma protetora pedindo comida. Muito mansa e sociável." },
            { id: 25, name: "Thor", sex: "Macho", age: "2 anos", breed: "Sem Raça Definida", city: "Alambari", species: "cão", size: "grande", medical: "Vacinado", castrated: false, specialNeed: false, singlePet: true, purpose: "guarda e companhia", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600", desc: "Forte e protetor, precisa de espaço.", past: "Visto vagando por chácaras da região. É dócil com as pessoas da casa, mas impõe respeito no quintal." },
            { id: 26, name: "Nino", sex: "Macho", age: "1 ano", breed: "Fox Paulistinha", city: "Itararé", species: "cão", size: "pequeno", medical: "Vacinado", castrated: false, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://cdn.folhape.com.br/upload/dn_arquivo/2023/12/terrier-brasileiro-01.jpg", desc: "Ativo e brincalhão, ideal para quem gosta de energia.", past: "Perdido na área urbana, não foi chipado e os donos originais nunca apareceram. Adora brincar com crianças." },
            { id: 27, name: "Luna", sex: "Fêmea", age: "4 anos", breed: "Gato SRD", city: "Capão Bonito", species: "gato", size: "pequeno", medical: "Castrada e vacinada", castrated: true, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://cdn.shopify.com/s/files/1/0500/8965/6473/files/cat-g4aa970acc_1920_480x480.jpg?v=1663249197", desc: "Tranquila, gosta de observar tudo de longe.", past: "Resgatada de uma casa abandonada junto com suas ninhadas, que já foram todas adotadas." },
            { id: 28, name: "Spike", sex: "Macho", age: "3 anos", breed: "Sem Raça Definida", city: "Angatuba", species: "cão", size: "grande", medical: "Castrado. Possui Displasia Coxofemoral leve (controlada com condroprotetores periódicos).", castrated: true, specialNeed: true, singlePet: false, purpose: "companhia", img: "https://adotar.com.br/upload/2026-03/animais_imagem1337129.jpg?w=700&format=webp0", desc: "Companheiro ideal para caminhadas.", past: "Resgatado de uma vala na beira da estrada. Apesar da displasia leve, mantém boa mobilidade e ama passeiar sem exageros." },
            { id: 29, name: "Amora", sex: "Fêmea", age: "2 anos", breed: "Gato SRD", city: "Itapetininga", species: "gato", size: "pequeno", medical: "Vacinada", castrated: false, specialNeed: false, singlePet: false, purpose: "companhia", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600", desc: "Muito dócil, perfeita para famílias.", past: "Entregue na clínica veterinária por uma pessoa que a encontrou em um terreno baldio." },
            { id: 30, name: "Rex", sex: "Macho", age: "5 anos", breed: "Sem Raça Definida", city: "Tatuí", species: "cão", size: "grande", medical: "Castrado e vacinado", castrated: true, specialNeed: false, singlePet: false, purpose: "guarda e companhia", img: "https://i0.wp.com/petcaramelo.com/wp-content/uploads/2019/02/cachorros-grandes-e-doceis.jpg?fit=645%2C380&ssl=1", desc: "Calmo e obediente, ótimo para guarda e companhia.", past: "Ex-cão de firma que faliu. Ficou para trás no terreno e foi resgatado pela equipe voluntária." }
        ];
        // Force a atualização dos dados de teste:
        localStorage.setItem('dbDogs', JSON.stringify(initialDogs));
        let dbDogs = JSON.parse(localStorage.getItem('dbDogs')) || initialDogs;
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userProfile = JSON.parse(localStorage.getItem('profile')) || null;
        let likedDogs = JSON.parse(localStorage.getItem('likedDogs')) || [];
        let adoptionInterests = JSON.parse(localStorage.getItem('adoptionInterests')) || [
            { petId: 1, petName: "Caramelo", userEmail: "joao.adotante@gmail.com", date: "28/08/2026" }
        ];

        let currentUser = null;
        let currentModalPetId = null;

        let dogsList = [];
        let isDragging = false;
        let startX = 0, startY = 0, currentX = 0, currentY = 0;
        let topCard = null;

        function saveStorage() {
            localStorage.setItem('dbDogs', JSON.stringify(dbDogs));
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('profile', JSON.stringify(userProfile));
            localStorage.setItem('likedDogs', JSON.stringify(likedDogs));
            localStorage.setItem('adoptionInterests', JSON.stringify(adoptionInterests));
        }
        function calculateAgeString(birthdateStr) {
            if (!birthdateStr) return "Idade não informada";

            const birth = new Date(birthdateStr);
            const now = new Date();

            if (isNaN(birth.getTime())) return birthdateStr; // Caso seja texto antigo como "2 anos"

            let years = now.getFullYear() - birth.getFullYear();
            let months = now.getMonth() - birth.getMonth();

            if (now.getDate() < birth.getDate()) {
                months--;
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            if (years === 0 && months === 0) {
                return "Recém-nascido";
            }

            let result = [];
            if (years > 0) result.push(`${years} ${years === 1 ? 'ano' : 'anos'}`);
            if (months > 0) result.push(`${months} ${months === 1 ? 'mês' : 'meses'}`);

            return result.join(" e ");
        }
        function previewPetAge() {
            const val = document.getElementById('pet-form-birthdate').value;
            const preview = document.getElementById('pet-age-preview');
            if (val) {
                preview.innerText = `Idade calculada: ${calculateAgeString(val)}`;
            } else {
                preview.innerText = '';
            }
        }
        function setImgSourceMode(mode) {
            const modes = ['file', 'camera', 'url'];
            modes.forEach(m => {
                document.getElementById(`img-input-${m}`).classList.toggle('hidden', m !== mode);
                const btn = document.getElementById(`btn-mode-${m}`);
                if (m === mode) {
                    btn.className = "flex-1 py-1.5 px-2 bg-orange-500 text-white rounded-lg font-bold text-[11px] flex items-center justify-center gap-1";
                } else {
                    btn.className = "flex-1 py-1.5 px-2 bg-gray-100 text-gray-600 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1";
                }
            });
        }
        function handleImageFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const base64Img = e.target.result;
                    document.getElementById('pet-form-img-value').value = base64Img;
                    updateImgPreview(base64Img);
                };
                reader.readAsDataURL(file);
            }
        }
        function updateImgPreview(src) {
            const container = document.getElementById('img-preview-container');
            const img = document.getElementById('img-preview');
            if (src) {
                img.src = src;
                container.classList.remove('hidden');
                container.classList.add('flex');
            } else {
                container.classList.add('hidden');
                container.classList.remove('flex');
            }
        }

        // --- SISTEMA DE AUTENTICAÇÃO E ROTEAMENTO ---
        function toggleAuth(type) {
            document.getElementById('form-login').classList.toggle('hidden', type !== 'login');
            document.getElementById('form-register').classList.toggle('hidden', type !== 'register');
        }

        function login() {
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value.trim();

            if (!email || !pass) return alert("Preencha todos os campos!");

            // LOGIN DE ADMINISTRADOR / ONG
            if (email === "admin@gmail.com" && pass === "1234") {
                currentUser = { email: "admin@gmail.com", role: "admin" };
                document.getElementById('view-auth').classList.add('hidden');
                document.getElementById('view-admin').classList.remove('hidden');
                renderAdminPets();
                renderAdminInterests();
                return;
            }

            // LOGIN DE USUÁRIO COMUM / ADOTANTE
            let user = users.find(u => u.email === email && u.password === pass);
            if (!user) {
                user = { email, password: pass };
                users.push(user);
                saveStorage();
            }

            currentUser = { email, role: "user" };
            document.getElementById('profile-user-email').innerText = email;
            document.getElementById('view-auth').classList.add('hidden');

            if (!userProfile) {
                document.getElementById('view-profile').classList.remove('hidden');
            } else {
                document.getElementById('app').classList.remove('hidden');
                initApp();
            }
        }

        function register() {
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value;

            if (!email || !password) {
                alert("Preencha todos os campos para se cadastrar.");
                return;
            }

            if (users.find(u => u.email === email)) {
                alert("Este e-mail já está cadastrado.");
                return;
            }

            // Cria o novo usuário com papel 'user'
            const newUser = { email, password, role: 'user' };
            users.push(newUser);

            // Login automático
            currentUser = newUser;
            saveStorage();

            alert("Conta criada com sucesso! Complete seu perfil a seguir.");

            // Direciona direto para o Quiz/Perfil de adoção
            document.getElementById('view-auth').classList.add('hidden');
            document.getElementById('view-profile').classList.remove('hidden');
            document.getElementById('view-profile').classList.add('flex');
        }

        function logout() {
            currentUser = null;
            document.getElementById('view-admin').classList.add('hidden');
            document.getElementById('app').classList.add('hidden');
            document.getElementById('view-profile').classList.add('hidden');
            document.getElementById('view-auth').classList.remove('hidden');
        }

        function deleteAccount() {
            if (confirm("Tem certeza que deseja excluir sua conta?")) {
                localStorage.clear();
                location.reload();
            }
        }

        // --- PAINEL DA ONG (ADMINISTRATIVO) ---
        function switchAdminTab(tab) {
            const isPets = tab === 'pets';
            document.getElementById('admin-tab-pets').classList.toggle('hidden', !isPets);
            document.getElementById('admin-tab-interests').classList.toggle('hidden', isPets);

            document.getElementById('admin-tab-btn-pets').className = isPets
                ? "flex-1 py-3 text-xs font-bold text-orange-500 border-b-2 border-orange-500 transition-colors flex items-center justify-center gap-1"
                : "flex-1 py-3 text-xs font-bold text-gray-400 border-b-2 border-transparent transition-colors flex items-center justify-center gap-1";

            document.getElementById('admin-tab-btn-interests').className = !isPets
                ? "flex-1 py-3 text-xs font-bold text-orange-500 border-b-2 border-orange-500 transition-colors flex items-center justify-center gap-1 relative"
                : "flex-1 py-3 text-xs font-bold text-gray-400 border-b-2 border-transparent transition-colors flex items-center justify-center gap-1 relative";
        }

        function renderAdminPets() {
            const grid = document.getElementById('admin-pets-grid');
            grid.innerHTML = "";

            dbDogs.forEach(pet => {
                const sexIcon = pet.sex === "Fêmea" ? '<i class="ph-bold ph-gender-female text-pink-500"></i>' : '<i class="ph-bold ph-gender-male text-blue-500"></i>';

                const card = document.createElement('div');
                card.className = "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative flex flex-col cursor-pointer group hover:shadow-md transition-shadow";
                card.innerHTML = `
                    <div class="relative h-32 w-full bg-gray-100" onclick="openModal(${pet.id})">
                        <img src="${pet.img}" class="w-full h-full object-cover">
                        <button onclick="event.stopPropagation(); openPetFormModal(${pet.id})" 
                            class="absolute top-2 right-2 bg-white/90 text-gray-700 hover:text-orange-500 rounded-full w-7 h-7 flex items-center justify-center shadow backdrop-blur-sm transition-colors" title="Editar Pet">
                            <i class="ph-bold ph-pencil-simple text-sm"></i>
                        </button>
                    </div>
                    <div class="p-2.5 flex flex-col justify-between flex-1" onclick="openModal(${pet.id})">
                        <div class="flex items-center justify-between">
                            <h3 class="font-bold text-gray-800 text-xs truncate max-w-[80px]">${pet.name}</h3>
                            <span class="text-xs flex items-center gap-0.5 font-semibold text-gray-600">${sexIcon} ${pet.sex || 'Macho'}</span>
                        </div>
                        <p class="text-[10px] text-gray-400 truncate mt-0.5">${pet.breed} • ${pet.age}</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function renderAdminInterests() {
            const list = document.getElementById('admin-interests-list');
            const badge = document.getElementById('admin-interest-badge');
            list.innerHTML = "";

            if (adoptionInterests.length === 0) {
                list.innerHTML = `<p class="text-xs text-gray-400 text-center py-8">Nenhum interesse registrado até o momento.</p>`;
                badge.classList.add('hidden');
                return;
            }

            badge.innerText = adoptionInterests.length;
            badge.classList.remove('hidden');

            adoptionInterests.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = "bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3 text-xs";
                card.innerHTML = `
                    <div class="space-y-1 truncate">
                        <div class="flex items-center gap-1.5">
                            <span class="bg-orange-100 text-orange-600 font-bold px-2 py-0.5 rounded-md text-[10px]">Pet: ${item.petName}</span>
                            <span class="text-[10px] text-gray-400">${item.date || 'Hoje'}</span>
                        </div>
                        <p class="font-bold text-gray-800 truncate"><i class="ph-fill ph-envelope mr-1 text-gray-400"></i>${item.userEmail}</p>
                    </div>
                    <button onclick="removeInterest(${index})" class="text-red-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50" title="Remover">
                        <i class="ph-bold ph-trash text-base"></i>
                    </button>
                `;
                list.appendChild(card);
            });
        }

        function removeInterest(index) {
            adoptionInterests.splice(index, 1);
            saveStorage();
            renderAdminInterests();
        }

        function openPetFormModal(petId = null) {
            const modal = document.getElementById('pet-form-modal');
            const title = document.getElementById('pet-form-title');
            const form = document.getElementById('form-pet-editor');

            form.reset();
            document.getElementById('pet-age-preview').innerText = '';
            updateImgPreview('');
            setImgSourceMode('file');

            if (petId) {
                const pet = dbDogs.find(d => d.id === petId);
                if (!pet) return;
                title.innerText = "Editar Animal";
                document.getElementById('pet-form-id').value = pet.id;
                document.getElementById('pet-form-name').value = pet.name || '';
                document.getElementById('pet-form-sex').value = pet.sex || 'Macho';
                document.getElementById('pet-form-species').value = pet.species || 'cão';
                document.getElementById('pet-form-birthdate').value = pet.birthdate || '';
                document.getElementById('pet-form-size').value = pet.size || 'médio';
                document.getElementById('pet-form-breed').value = pet.breed || '';
                document.getElementById('pet-form-city').value = pet.city || '';

                const imgSrc = pet.img || '';
                document.getElementById('pet-form-img-value').value = imgSrc;
                if (imgSrc.startsWith('http')) {
                    setImgSourceMode('url');
                    document.getElementById('pet-form-img-url').value = imgSrc;
                }
                updateImgPreview(imgSrc);

                document.getElementById('pet-form-medical').value = pet.medical || '';
                document.getElementById('pet-form-past').value = pet.past || '';
                document.getElementById('pet-form-desc').value = pet.desc || '';
                document.getElementById('pet-form-castrated').checked = !!pet.castrated;
                document.getElementById('pet-form-specialNeed').checked = !!pet.specialNeed;
                previewPetAge();
            } else {
                title.innerText = "Cadastrar Novo Pet";
                document.getElementById('pet-form-id').value = "";
            }

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closePetFormModal() {
            const modal = document.getElementById('pet-form-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function savePetForm(e) {
            e.preventDefault();

            const idVal = document.getElementById('pet-form-id').value;
            const imgVal = document.getElementById('pet-form-img-value').value;

            if (!imgVal) {
                alert("Por favor, selecione uma foto para o pet (arquivo, câmera ou link)!");
                return;
            }

            const birthdate = document.getElementById('pet-form-birthdate').value;

            const petData = {
                id: idVal ? parseInt(idVal) : Date.now(),
                name: document.getElementById('pet-form-name').value,
                sex: document.getElementById('pet-form-sex').value,
                species: document.getElementById('pet-form-species').value,
                birthdate: birthdate,
                age: calculateAgeString(birthdate),
                size: document.getElementById('pet-form-size').value,
                breed: document.getElementById('pet-form-breed').value,
                city: document.getElementById('pet-form-city').value,
                img: imgVal,
                medical: document.getElementById('pet-form-medical').value,
                past: document.getElementById('pet-form-past').value,
                desc: document.getElementById('pet-form-desc').value,
                castrated: document.getElementById('pet-form-castrated').checked,
                specialNeed: document.getElementById('pet-form-specialNeed').checked,
                singlePet: false,
                purpose: "companhia"
            };

            if (idVal) {
                const idx = dbDogs.findIndex(d => d.id === parseInt(idVal));
                if (idx !== -1) dbDogs[idx] = petData;
            } else {
                dbDogs.unshift(petData);
            }

            saveStorage();
            closePetFormModal();
            if (typeof closeModal === 'function') closeModal();
            if (typeof renderAdminPets === 'function') renderAdminPets();
            if (typeof initApp === 'function') initApp();

            alert("Pet salvo com sucesso!");
        }

        function deletePet(id) {
            if (confirm("Tem certeza de que deseja excluir este animal da base de dados?")) {
                dbDogs = dbDogs.filter(d => d.id !== id);
                likedDogs = likedDogs.filter(d => d.id !== id);
                saveStorage();
                closeModal();
                renderAdminPets();
                alert("Pet excluído!");
            }
        }

        // --- SISTEMA DE CORRESPONDÊNCIA / QUIZ ---
        function updateFileLabel(inputId, labelId) {
            const input = document.getElementById(inputId);
            const label = document.getElementById(labelId);
            if (input.files && input.files[0]) {
                label.innerText = "✓ " + input.files[0].name;
                label.classList.add("text-green-600", "font-bold");
            }
        }

        function saveProfile() {
            const species = document.querySelector('input[name="p-species"]:checked')?.value || "";
            const size = document.querySelector('input[name="p-size"]:checked')?.value || "";
            const age = document.getElementById('p-age').value;
            const purpose = document.getElementById('p-purpose').value;
            const housing = document.querySelector('input[name="p-housing"]:checked')?.value || "casa";
            const activity = document.getElementById('p-activity-select').value;
            const routine = document.getElementById('p-routine').value;
            const kids = document.getElementById('p-kids').checked;
            const otherPets = document.getElementById('p-otherPets').checked;
            const acceptSpecial = document.getElementById('p-acceptSpecial').checked;
            const finance = document.getElementById('p-finance').value;

            userProfile = { species, size, age, purpose, housing, activity, routine, kids, otherPets, acceptSpecial, finance };
            saveStorage();

            document.getElementById('view-profile').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
            initApp();
        }

        function openProfileEdit() {
            document.getElementById('app').classList.add('hidden');
            document.getElementById('view-profile').classList.remove('hidden');
        }

        function calculateMatch(profile, pet) {
            if (!profile) return 85;
            let score = 50;

            if (!profile.acceptSpecial && pet.specialNeed) return 0;
            if (profile.species && pet.species && profile.species === pet.species) score += 15;
            if (profile.size && pet.size && profile.size === pet.size) score += 15;
            if (profile.housing === 'apartamento' && pet.size === 'grande') score -= 10;
            if (profile.housing === 'casa_quintal' && pet.size === 'grande') score += 10;

            return Math.min(Math.max(score, 40), 99);
        }

        function enrichPet(pet) {
            return {
                ...pet,
                sex: pet.sex || "Macho",
                matchScore: calculateMatch(userProfile, pet)
            };
        }

        // --- APPLICAÇÃO ADOTANTE (SWIPE & INTERFACE) ---
        function initApp() {
            dogsList = dbDogs
                .map(enrichPet)
                .filter(pet => !likedDogs.some(liked => liked.id === pet.id))
                .sort((a, b) => b.matchScore - a.matchScore);

            updateLikedView();
            updateBadge();
            renderCards();
        }

        function renderCards() {
            const container = document.getElementById('cards-container');
            const emptyState = document.getElementById('empty-state');
            container.innerHTML = '';

            if (dogsList.length === 0) {
                emptyState.classList.remove('hidden');
                return;
            }
            emptyState.classList.add('hidden');

            const petsToRender = dogsList.slice(0, 5).reverse();

            petsToRender.forEach((pet, index) => {
                const card = document.createElement('div');
                card.className = 'swipe-card flex flex-col justify-between cursor-pointer';
                card.dataset.id = pet.id;

                const sexIcon = pet.sex === "Fêmea" ? '<i class="ph-bold ph-gender-female text-pink-400"></i>' : '<i class="ph-bold ph-gender-male text-blue-400"></i>';

                card.innerHTML = `
                    <div class="relative w-full h-full bg-cover bg-center" style="background-image: url('${pet.img}')">
                        <div class="stamp stamp-like">AMEI</div>
                        <div class="stamp stamp-nope">PASSO</div>
                        
                        <div class="absolute top-4 left-4 bg-orange-500 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 z-10">
                            <i class="ph-fill ph-sparkle"></i> ${pet.matchScore}% Match
                        </div>

                        <div class="absolute inset-0 card-gradient flex flex-col justify-end p-5 text-white">
                            <div class="flex justify-between items-end mb-1">
                                <div>
                                    <h2 class="text-3xl font-bold leading-none flex items-center gap-2">${pet.name} <span class="text-xl font-normal opacity-90">${pet.age}</span> ${sexIcon}</h2>
                                    <p class="text-sm font-medium text-gray-200 mt-1"><i class="ph-fill ph-map-pin"></i> ${pet.city} • ${pet.breed}</p>
                                </div>
                                <button onclick="event.stopPropagation(); openModal(${pet.id})" class="bg-white/20 backdrop-blur-md p-2.5 rounded-full hover:bg-white/30 transition-colors">
                                    <i class="ph-bold ph-info text-xl"></i>
                                </button>
                            </div>
                            <p class="text-xs text-gray-300 line-clamp-2 mt-2">${pet.desc}</p>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });

            setupDragEvents();
        }

        function setupDragEvents() {
            const cards = document.querySelectorAll('.swipe-card');
            if (cards.length === 0) return;

            topCard = cards[cards.length - 1];

            topCard.addEventListener('pointerdown', handleDragStart);
            topCard.addEventListener('pointermove', handleDragMove);
            topCard.addEventListener('pointerup', handleDragEnd);
            topCard.addEventListener('pointercancel', handleDragEnd);

            topCard.addEventListener('click', (e) => {
                if (Math.abs(currentX) < 10 && Math.abs(currentY) < 10) {
                    const id = parseInt(topCard.dataset.id);
                    openModal(id);
                }
            });
        }

        function handleDragStart(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            topCard.style.transition = 'none';
        }

        function handleDragMove(e) {
            if (!isDragging) return;
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;

            const rotate = currentX * 0.05;
            topCard.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotate}deg)`;

            const likeStamp = topCard.querySelector('.stamp-like');
            const nopeStamp = topCard.querySelector('.stamp-nope');

            if (currentX > 50) {
                likeStamp.style.opacity = Math.min(currentX / 100, 1);
                nopeStamp.style.opacity = 0;
            } else if (currentX < -50) {
                nopeStamp.style.opacity = Math.min(Math.abs(currentX) / 100, 1);
                likeStamp.style.opacity = 0;
            } else {
                likeStamp.style.opacity = 0;
                nopeStamp.style.opacity = 0;
            }
        }

        function handleDragEnd() {
            if (!isDragging) return;
            isDragging = false;

            topCard.style.transition = 'transform 0.3s ease-out';

            if (currentX > 100) {
                swipeCard('right');
            } else if (currentX < -100) {
                swipeCard('left');
            } else {
                topCard.style.transform = 'translate(0px, 0px) rotate(0deg)';
                const stamps = topCard.querySelectorAll('.stamp');
                stamps.forEach(s => s.style.opacity = 0);
            }

            currentX = 0;
            currentY = 0;
        }

        function swipeCard(direction) {
            if (!topCard) return;

            const petId = parseInt(topCard.dataset.id);
            const pet = dbDogs.find(d => d.id === petId);

            if (direction === 'right' && pet) {
                likedDogs.push(pet);
                saveStorage();
                updateLikedView();
                updateBadge();
            }

            topCard.classList.add('animating');
            topCard.classList.add(direction === 'right' ? 'swipe-right' : 'swipe-left');

            setTimeout(() => {
                dogsList.shift();
                renderCards();
            }, 300);
        }

        // --- FILTROS ---
        function toggleFilterMenu() {
            document.getElementById('filter-menu').classList.toggle('hidden');
        }

        function applyFilters() {
            const species = document.getElementById('filter-species').value;
            const size = document.getElementById('filter-size').value;
            const special = document.getElementById('filter-special').value;

            let filtered = dbDogs.map(enrichPet).filter(pet => !likedDogs.some(liked => liked.id === pet.id));

            if (species) filtered = filtered.filter(p => p.species === species);
            if (size) filtered = filtered.filter(p => p.size === size);
            if (special === 'true') filtered = filtered.filter(p => p.specialNeed);
            if (special === 'false') filtered = filtered.filter(p => !p.specialNeed);

            dogsList = filtered;
            toggleFilterMenu();
            renderCards();
        }

        function resetApp() {
            likedDogs = [];
            saveStorage();
            initApp();
        }

        // --- NAVEGAÇÃO ENTRE ABAS DO USUÁRIO ---
        function switchTab(tab) {
            ['swipe', 'liked', 'settings'].forEach(t => {
                const view = document.getElementById(`view-${t === 'settings' ? 'settings-tab' : t}`);
                const navBtn = document.getElementById(`nav-tab-${t}`);
                if (view) view.classList.toggle('hidden', t !== tab);
                if (navBtn) navBtn.className = t === tab
                    ? 'flex flex-col items-center justify-center text-orange-500 flex-1 h-full transition-all'
                    : 'flex flex-col items-center justify-center text-gray-400 flex-1 h-full transition-all relative';
            });
        }

        function updateLikedView() {
            const grid = document.getElementById('liked-grid');
            const noLikes = document.getElementById('no-likes');
            grid.innerHTML = '';

            if (likedDogs.length === 0) {
                noLikes.classList.remove('hidden');
                return;
            }
            noLikes.classList.add('hidden');

            likedDogs.forEach(pet => {
                const sexIcon = pet.sex === "Fêmea" ? '<i class="ph-bold ph-gender-female text-pink-500"></i>' : '<i class="ph-bold ph-gender-male text-blue-500"></i>';

                const card = document.createElement('div');
                card.className = "bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow";
                card.onclick = () => openModal(pet.id);
                card.innerHTML = `
                    <div class="h-32 bg-cover bg-center" style="background-image: url('${pet.img}')"></div>
                    <div class="p-3">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-gray-800 text-sm truncate">${pet.name}</h3>
                            <span class="text-xs">${sexIcon}</span>
                        </div>
                        <p class="text-xs text-gray-400 truncate mt-0.5">${pet.city}</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function updateBadge() {
            const badge = document.getElementById('liked-badge');
            if (likedDogs.length > 0) {
                badge.innerText = likedDogs.length;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        // --- MODAL DE DETALHES ---
        function openModal(petId) {
            const pet = dbDogs.find(d => d.id === petId);
            if (!pet) return;

            currentModalPetId = pet.id;

            document.getElementById('modal-img').src = pet.img;
            document.getElementById('modal-name').innerText = pet.name;
            document.getElementById('modal-breed').innerText = pet.breed;
            document.getElementById('modal-age').innerHTML = `<i class="ph-fill ph-clock"></i> ${pet.age}`;
            document.getElementById('modal-city').innerHTML = `<i class="ph-fill ph-map-pin"></i> ${pet.city}`;
            document.getElementById('modal-size').innerText = pet.size;
            document.getElementById('modal-castrated').innerText = pet.castrated ? "Castrado" : "Não castrado";
            document.getElementById('modal-medical').innerText = pet.medical || "Saúde ok";
            document.getElementById('modal-past').innerText = pet.past || "Sem detalhes informados.";
            document.getElementById('modal-desc').innerText = pet.desc;

            // Configurar botões com base no tipo de usuário logado
            const userActions = document.getElementById('modal-user-actions');
            const adminActions = document.getElementById('modal-admin-actions');

            if (currentUser && currentUser.role === 'admin') {
                userActions.classList.add('hidden');
                adminActions.classList.remove('hidden');

                document.getElementById('btn-modal-edit').onclick = () => {
                    closeModal();
                    openPetFormModal(pet.id);
                };
                document.getElementById('btn-modal-delete').onclick = () => {
                    deletePet(pet.id);
                };
            } else {
                userActions.classList.remove('hidden');
                adminActions.classList.add('hidden');
            }

            const modal = document.getElementById('pet-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeModal() {
            const modal = document.getElementById('pet-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            currentModalPetId = null;
        }

        function fakeAdoptionAction() {
            if (!currentModalPetId) return;

            const pet = dbDogs.find(d => d.id === currentModalPetId);
            if (!pet) return;

            const email = currentUser ? currentUser.email : "adotante@email.com";
            const today = new Date().toLocaleDateString('pt-BR');

            // Salva interesse para o painel da ONG
            adoptionInterests.unshift({
                petId: pet.id,
                petName: pet.name,
                userEmail: email,
                date: today
            });
            saveStorage();

            alert(`Parabéns! Seu interesse por ${pet.name} foi registrado. A ONG entrará em contato pelo seu e-mail (${email})!`);
            closeModal();
        }
