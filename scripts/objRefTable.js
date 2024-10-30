const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Текст: 0},
	{играть: 0},
	{Текст2: 0},
	{Платформер: 0},
	{СледитьЗа: 0},
	{Спрайт: 0},
	{Твёрдый: 0},
	{плотворма: 0},
	{Текст3: 0},
	{победа: 0},
	{Текст4: 0},
	{поражение: 0},
	{Спрайт2: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{ТайловыйФон8: 0},
	{Спрайт5: 0},
	{ТайловыйФон: 0},
	{Текст5: 0},
	{ТайловыйФон2: 0},
	{Текст6: 0}
];

self.InstanceType = {
	Текст: class extends self.ITextInstance {},
	играть: class extends self.IButtonInstance {},
	Текст2: class extends self.ITextInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	плотворма: class extends self.ISpriteInstance {},
	Текст3: class extends self.ITextInstance {},
	победа: class extends self.IButtonInstance {},
	Текст4: class extends self.ITextInstance {},
	поражение: class extends self.IButtonInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	ТайловыйФон8: class extends self.ITiledBackgroundInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Текст5: class extends self.ITextInstance {},
	ТайловыйФон2: class extends self.ITiledBackgroundInstance {},
	Текст6: class extends self.ITextInstance {}
}