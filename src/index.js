var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var TelegramBot = require('node-telegram-bot-api');
var PrismaClient = require('@prisma/client').PrismaClient;
var dotenv = require('dotenv');
var fs = require('fs');
dotenv.config();
var prisma = new PrismaClient();
var telegramBotToken = process.env.TELEGRAM_TOKEN;
if (!telegramBotToken) {
    console.error("Token do bot do Telegram não encontrado no arquivo .env.");
    process.exit(1);
}
var bot = new TelegramBot(telegramBotToken, { polling: false });
function handleEmail(message) {
    return __awaiter(this, void 0, void 0, function () {
        var email, existingEmail, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = message.text.trim().toLowerCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 10]);
                    return [4 /*yield*/, prisma.email.findUnique({ where: { address: email } })];
                case 2:
                    existingEmail = _a.sent();
                    if (!existingEmail) return [3 /*break*/, 4];
                    return [4 /*yield*/, bot.sendMessage(message.chat.id, "O email '".concat(email, "' j\u00E1 est\u00E1 registrado."))];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, prisma.email.create({
                        data: {
                            address: email,
                            timestamp: new Date(),
                        },
                    })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, bot.sendMessage(message.chat.id, "Obrigado! Entraremos em contato em breve.")];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [3 /*break*/, 10];
                case 8:
                    error_1 = _a.sent();
                    console.error('Erro ao salvar o email:', error_1);
                    return [4 /*yield*/, bot.sendMessage(message.chat.id, 'Ocorreu um erro ao salvar seu email. Por favor, tente novamente mais tarde.')];
                case 9:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
var chatState = {};
bot.on('message', function (message) { return __awaiter(_this, void 0, void 0, function () {
    var now, hour, isWorkingHours, chatId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                now = new Date();
                hour = now.getHours();
                isWorkingHours = hour >= 9 && hour < 18;
                chatId = message.chat.id;
                if (!isWorkingHours) return [3 /*break*/, 2];
                return [4 /*yield*/, bot.sendMessage(chatId, 'Olá! Confira nosso site: https://faesa.br')];
            case 1:
                _a.sent();
                return [3 /*break*/, 6];
            case 2:
                if (!(chatState[chatId] === 'awaitingEmail')) return [3 /*break*/, 4];
                delete chatState[chatId];
                return [4 /*yield*/, handleEmail(message)];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                chatState[chatId] = 'awaitingEmail';
                return [4 /*yield*/, bot.sendMessage(chatId, "Fora do hor\u00E1rio comercial. Nosso hor\u00E1rio de atendimento \u00E9 de 09:00 \u00E0s 18:00. Por favor, informe seu e-mail para entrarmos em contato.")];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
console.log("Bot iniciado. Aguardando mensagens no link ==> https://web.telegram.org/a/#6926404403");
var lockFilePath = 'bot.lock';
if (fs.existsSync(lockFilePath)) {
    try {
        fs.unlinkSync(lockFilePath);
        console.log("Arquivo '".concat(lockFilePath, "' removido com sucesso."));
    }
    catch (err) {
        console.error("Erro ao remover o arquivo '".concat(lockFilePath, "':"), err);
    }
}
bot.startPolling();
