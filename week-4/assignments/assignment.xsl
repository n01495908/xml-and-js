<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<xsl:template match="/"> 
    <html> 
     <head>
     <style>
         td{text-align: center;
         vertical-align: middle;}
        body{
        background-color:#F0F8FF;
         }
    </style>
    </head>
     <body> 
        <h1>Catalog</h1>
        <ol> 
            <xsl:for-each select="catalog/product">
            <li><article><h3><xsl:value-of select="@product_id"/></h3></article></li>
            <li><article><p><xsl:value-of select="@description"/></p></article></li>
            <table border="1">
            <tr>
                <th>Item Number</th>
                <th>Price</th>
                <th>Gender</th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>Extra Large</th>
             </tr>
             <xsl:for-each select="catalog_item">
            <tr>
                <td><xsl:value-of select="item_number"/></td>
                <td><xsl:value-of select="price"/></td>
                <td><xsl:value-of select="@gender"/></td>
                <td>
            <table border="1" align="center">
            <tr>
                <th>Color</th>
                <th>Image</th>
            </tr>
            <xsl:for-each select="size[@description='Small']">
            <xsl:for-each select="color_swatch">
            <tr>    
                <td><xsl:value-of select="."/></td>                              
                <td><xsl:value-of select="@image"/></td>
            </tr>
            </xsl:for-each>
            </xsl:for-each>
            </table>
                 </td>
                <td>
             <table border="1" align="center">
            <tr>
                <th>Color</th>
                <th>Image</th>
             </tr>
            <xsl:for-each select="size[@description='Medium']">
            <xsl:for-each select="color_swatch">
            <tr>    
                <td><xsl:value-of select="."/></td>                              
                <td><xsl:value-of select="@image"/></td>
            </tr>
            </xsl:for-each>
            </xsl:for-each>
            </table>
                </td>
                <td>
            <table border="1" align="center">
            <tr>
                <th>Color</th>
                <th>Image</th>
            </tr>
            <xsl:for-each select="size[@description='Large']">
            <xsl:for-each select="color_swatch">
            <tr>    
                <td><xsl:value-of select="."/></td>                              
                <td><xsl:value-of select="@image"/></td>
            </tr>
            </xsl:for-each>
            </xsl:for-each>
            </table>
                </td>
                <td>
             <table border="1" align="center">
            <tr>
                <th>Color</th>
                <th>Image</th>
            </tr>
            <xsl:for-each select="size[@description='Extra Large']">
            <xsl:for-each select="color_swatch">
            <tr>    
                <td><xsl:value-of select="."/></td>                              
                <td><xsl:value-of select="@image"/></td> 
            </tr>
            </xsl:for-each>
            </xsl:for-each>
            </table>
                </td>
            </tr>
            </xsl:for-each>
            </table>
            </xsl:for-each>
         </ol>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>   