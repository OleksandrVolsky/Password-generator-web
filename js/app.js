// DOM
// пароль і кнопка копіювати
const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");

// лінія і кількість символів
const lengthValueEl = document.getElementById("lengthValue");
const lengthRangeEl = document.getElementById("lengthRange");

// чекбокси
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

// Бари
const strengthTextEl = document.getElementById("strengthText");
const bars = document.querySelectorAll(".bar");

// кнопка генерувати
const generateBtn = document.getElementById("generatorBtn");

// Набори символів
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SYMS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Функції
// функція генерації пароля
function generatorPass() {
    const length = Number(lengthRangeEl.value);

    const useUpper = upperEl.checked;
    const useLower = lowerEl.checked;
    const useNums = numbersEl.checked;
    const useSyms = symbolsEl.checked;

    // Якщо нічого не вибрано
    if (!useUpper && !useLower && !useNums && !useSyms) {
        passwordEl.textContent = "Select options"; 
        updateStrengthUI(1)
        return 

        // textContent - це властивість DOM елемента яка вставляє або пвертає текст в середені елемента
    }

    // Пул символів
    let pool = "";
    if (useUpper) pool += UPPER;
    if (useLower) pool += LOWER;
    if (useNums) pool += NUMS;
    if (useSyms) pool += SYMS;

    // Гарантуємо хочаб 1 символ з кожного вибраного типу
    const forced = []

    if (useUpper) forced.push(UPPER[Math.floor(Math.random() * UPPER.length)]);
    if (useLower) forced.push(LOWER[Math.floor(Math.random() * LOWER.length)]);
    if (useNums) forced.push(NUMS[Math.floor(Math.random() * NUMS.length)]);
    if (useSyms) forced.push(SYMS[Math.floor(Math.random() * SYMS.length)]);

    // push - додає елемент в кінець масиву 
    // floor - округлює число вниз до найблищого 4.9 = 4, 4.1 = 4

    const result = [...forced]

    while (result.length < length) {
        result.push(pool[Math.floor(Math.random() * pool.length)]);
    }

    // Перемішування символів
    for (let i = result.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j],result[i]];
    }

    passwordEl.textContent = result.join("")

    
    // join() - перетвроює масив в рядок

    // strength
    const level = calculateStrength(length, useUpper, useLower, useNums, useSyms);
    updateStrengthUI(level)
}


// функція рахує strength
function calculateStrength(length, useUpper, useLower, useNums, useSyms) {
    const typesCount = [useUpper, useLower, useNums, useSyms].filter(Boolean).length

    // filter(Boolean) - Видаляє всі "false" значення з масиву

    // базова оцінка
    let score = 0;

    // за довжиною
    if (length >= 8) score++
    if (length >= 12) score++

    // за різноманіттям
    if (typesCount >= 2)score++
    if (typesCount >= 3)score++

    // перевести до 1.4
    const level = Math.min(4, Math.max(1, score));
    return level;
}


// функція оновлює UI
function updateStrengthUI(level) {
    const labels = ["WEAK", "MEDIUM", "STRONG", "VERY STRONG"];
    strengthTextEl.textContent = labels[level - 1];

    bars.forEach((bar, index) => {
        if (index < level) {
            bar.style.backgroundColor = "#A4FFAF";
            bar.style.borderColor = "#A4FFAF";

            //  forEach - проходиться по кожному елементу масиву і виконує функцію для кожного з них
        }
        else {
            bar.style.backgroundColor = "transparent";
            bar.style.borderColor = "#ffffff";    
        }
    });
}


// функція копіювання пароля
async function copyPass() { // асинхронна функція
    const text = passwordEl.textContent.trim();
    if (!text || text === "Select options") return;

    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "✅";
        setTimeout(() => (copyBtn.textContent = "📋"), 800);
    }
    catch (e) {
        alert("copy faild.Try manually.");
    }

    // trim() - видаляє пробіли з паочатку і кінця рядка
    // writeText() - копібє текст в буфер обміну
    // setTimeout() - виконує код через певний час
}

// події 
// range: показувати значення
lengthRangeEl.addEventListener("input", () => {
    lengthValueEl.textContent = lengthValueEl.value;

    // оновлення strength на льоту (якщо обрані опції)
    const length = Number(lengthRangeEl.value);
    const level = calculateStrength(length, upperEl.checked, lowerEl.checked, numbersEl.checked, symbolsEl.checked);

    updateStrengthUI(level);
});

// кнопка generate
generateBtn.addEventListener("click", generatorPass);

// кнопка copy
copyBtn.addEventListener("click", copyPass);

// старт
lengthRangeEl.textContent = lengthRangeEl.value;
generatorPass();



