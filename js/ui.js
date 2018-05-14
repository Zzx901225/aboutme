xiang.ui = {};
console.log("xiang.ui", xiang.ui);

xiang.ui.cjAnamite = function(){
	//p1
	var oP1 = xiang.tools.$("#page1");
	var oHomeContend = xiang.tools.getByClass(oP1, "homeContend")[0];
	var oHomeBtn = xiang.tools.getByClass(oP1, "homeBtn")[0];
	//p2
	
	var oP2 = xiang.tools.$("#page2");
	var oPlane1 = xiang.tools.getByClass(oP2, "plane1")[0];
	var oPlane2 = xiang.tools.getByClass(oP2, "plane2")[0];
	var oPlane3 = xiang.tools.getByClass(oP2, "plane3")[0];
	//p3
	var oP3 = xiang.tools.$("#page3");
	var oPancel1 = xiang.tools.getByClass(oP3, "pancel1")[0];
	var oPancel2 = xiang.tools.getByClass(oP3, "pancel2")[0];
	var oPancel3 = xiang.tools.getByClass(oP3, "pancel3")[0];
	//p4
	var oWanhua = xiang.tools.$("#wanhua");
	var oImgBox = xiang.tools.getByClass(oWanhua, "imgBox");
	//p5
	var oP5 = xiang.tools.$("#page5");
	var oP5_text = xiang.tools.getByClass(oP5, "p5_text")[0];
	var oTxtBox = xiang.tools.getByClass(oP5, "change")[0];
	
	var cj = [
		{
			inAn : function(){
				oHomeContend.style.opacity = 1;
				oHomeBtn.style.opacity = 1;
				xiang.tools.setStyle( oHomeContend, "transform", "translate( 0, 0 )" );
				xiang.tools.setStyle( oHomeBtn, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				oHomeContend.style.opacity = 0;
				oHomeBtn.style.opacity = 0;
				xiang.tools.setStyle( oHomeContend, "transform", "translate( 0, -200px )" );
				xiang.tools.setStyle( oHomeBtn, "transform", "translate( 0, 300px )" );
			}
		},
		{
			inAn : function(){
				xiang.tools.setStyle( oPlane1, "transform", "translate( 0, 0 )" );
				xiang.tools.setStyle( oPlane2, "transform", "translate( 0, 0 )" );
				xiang.tools.setStyle( oPlane3, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				
				xiang.tools.setStyle( oPlane1, "transform", "translate( -200px, -200px )" );
				xiang.tools.setStyle( oPlane2, "transform", "translate( -200px, 200px )" );
				xiang.tools.setStyle( oPlane3, "transform", "translate( 200px, -200px )" );
			}
		},
		{
			inAn : function(){
				xiang.tools.setStyle( oPancel1, "transform", "translate( 0, 0 )" );
				xiang.tools.setStyle( oPancel2, "transform", "translate( 0, 0 )" );
				xiang.tools.setStyle( oPancel3, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				xiang.tools.setStyle( oPancel1, "transform", "translate( 0, -200px )" );
				xiang.tools.setStyle( oPancel2, "transform", "translate( 0, 200px )" );
				xiang.tools.setStyle( oPancel3, "transform", "translate( 0, 200px )" );
			}
		},
		{
			inAn : function(){
				xiang.tools.setStyle( oImgBox[0], "transform", "rotate(0)" );
				xiang.tools.setStyle( oImgBox[1], "transform", "rotate(0)" );
			},
			outAn : function(){
				xiang.tools.setStyle( oImgBox[0], "transform", "rotate(45deg)" );
				xiang.tools.setStyle( oImgBox[1], "transform", "rotate(-45deg)" );
			}
		},
		{
			inAn : function(){
				oTxtBox.style.opacity = 1;
				oP5_text.style.opacity = 1;
				xiang.tools.setStyle( oTxtBox, "transform", "translate( 0, 0 )" );
				xiang.tools.setStyle( oP5_text, "transform", "translate( 0, 0 )" );
			},
			outAn : function(){
				oTxtBox.style.opacity = 0;
				oP5_text.style.opacity = 0;
				xiang.tools.setStyle( oTxtBox, "transform", "translate( -300px, 0 )" );
				xiang.tools.setStyle( oP5_text, "transform", "translate( 200px, 0 )" );
			}
		}
		
	];
	
	return cj;
};
xiang.ui.cjAllOut = function(){
	var cj = xiang.ui.cjAnamite();
	for(var i = 0; i < cj.length; i++){
		cj[i].outAn();
	}
}