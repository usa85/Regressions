let myarrstatdata = [
    {
        "name":"Model Rational",
        "model": 0,
        "modeltitle": "Analysis Description",
        "description": "<p>voici la description de l'analyse des modeles ci inclues presentes.",
        "description2":"<div class=\"w3-responsive\"><h2>Some potential Model Name</h2><table class=\"w3-hoverable w3-centered\"><caption>Impact of variables</caption><tr><th colspan='13'>Estimated Market Value of Land for 1,000 square foot of land - Coefficients</th></tr><tr><td></td><td colspan='2'>Unstandertized\ncoefficients</td><td>Standartized\nCoefficient</td><td></td><td></td><td colspan='2'>95.0% confidence interval\nfor B</td><td colspan='3'>Correlations</td><td colspan='2'>Collenearity\nStatistics</td></tr><tr><th>model</th><th>B</th><th>Std. Error</th><th>Beta</th><th>t</th><th>Sig.</th><th>Lower Bound</th><th>Upper Bound</th><th>Zero Order</th><th>Partial</th><th>Part</th><th>Tolerance</th><th>VIF</th></tr><tr><td>(constant)</td><td>$24,9411.40</td><td>$378.01</td><td></td><td>65.98</td><td>0.000</td><td>$24,200.00</td><td>$25,682.00</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Drive Time</td><td>$(1,333.25)</td><td>$56.09</td><td>-0.366</td><td>-23.63</td><td>0.000</td><td>$(1,442.82)</td><td>$(1.221.67)</td><td>-0.2999</td><td>-0.425</td><td>-0.356</td><td>0.948</td><td>1.055</td></tr><tr><td>Age</td><td>$(379.62)</td><td>$11.79</td><td>-0.520</td><td>-32.27</td><td>0.000</td><td>$(402.69)</td><td>$(356.55)</td><td>-0.541</td><td>-0.540</td><td>-0.486</td><td>0.875</td><td>1.143</td></tr><tr><td>Colonial</td><td>$858.11</td><td>$251.05</td><td>0.058</td><td>3.42</td><td>0.001</td><td>$365.82</td><td>$1.350.39</td><td>0.203</td><td>0.068</td><td>0.051</td><td>0.791</td><td>1.265</td></tr><tr><td>Rambler</td><td>$886.90</td><td>$290.47</td><td>0.050</td><td>3.05</td><td>0.002</td><td>$317.32</td><td>$1.456.48</td><td>0.007</td><td>0.061</td><td>0.046</td><td>0.850</td><td>1.176</td></tr><tr><td>Split</td><td>$(1.319.23)</td><td>$218.88</td><td>-0.106</td><td>6.03</td><td>0.000</td><td>$(1,748.44)</td><td>$(890.03)</td><td>-0.211</td><td>-0.119</td><td>-0.091</td><td>0.729</td><td>1.372</td></tr><tr><th colspan='13' ><u>note regarding the model.</u><br><ul id='aligntable'><li>blabla</li><li>blalba</li><li>blabla</li><li>blabla</li></ul></th></tr></table><p><strong>Determination Coefficient</strong></p><table class=\"w3-hoverable\"><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr id=\"determinationtable\"><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</u></th></tr></table></div>",

        "constant": {
            "b": 24941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": "",
            "mypicture": "assets/images/mypicture.jpg",
            "mypicture2": "../assets/images/mypicture2.jpg" // going up one directory
        },

        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "loadtable":"<td>\"+myarrstatdata[id]+\".r</td><td>\"+myarrstatdata[id]+\".r-squared</td><td>\"+myarrstatdata[id]+\".adjusted_r_squared</td><td>\"+myarrstatdata[id]+\".std_error_of_the_estimate</td><td>\"+myarrstatdata[id]+\".r_square_change</td><td>\"+myarrstatdata[id]+\".f_change</td><td>\"+myarrstatdata[id]+\".df1</td><td>\"+myarrstatdata[id]+\".df2</td><td>\"+myarrstatdata[id]+\".sig_f_change</td><td>\"+myarrstatdata[id]+\".dubin_watson</tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },
    
    /* model 3 */
    {
        "name":"Residential Model 1",
        "model": 4,
        "modeltitle": "Second, Total Estimated Market Value of 1,000 Square foot of Land V.S. Drive Time, Building Age, and dummy variables such as Colonial, Rambler, Split Level and split Entry",
        
        "description": "<p>Residential properties total estimated market value adjusted for 1,000 square foot of land and based on drive time, building age, and dummy variable such as Colonial Rambler, Split Level and Split Entry provide more information.  </p><p>With a determination coefficient of 43.0%, the regression model is much stronger.  Better, the t-value for Rambler, Split Level and Entry fall above 3. The significance could be the result of sampling statistical error only.  However, the collinearity diagnostics indicate issues between (Rambler, Age), (Rambler, Colonial), (Age, Colonial), (Constant, Split), and (Constant, Drive Time.  Such results mandate further investigation to reduce collinearity issues.</p><p>We repeated the analysis by dropping successively Split Entry, Split Level, and Rambler to assess whether the t-values and significance levels would increase.  In each case, the t-values for Split Level-Rambler, then Rambler remain below 3, though the determination coefficient was stable around 48.8%.</p>",

        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    /* model 2 */
    {
        "name":"Residential Model 2",
        "model": 4,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Residential Model 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
       
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },
        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },


        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    /* model 3 */
   {
        "name":"Residential Model 3",
        "model": 4,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Residential Model 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
       
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },
        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },


        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    /* model 4 */
    {
        "name":"Residential Model 4",
        "model": 4,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Residential Model 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
       
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },
        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },


        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    /* model 5 */
    {
        "name":"Residential Model 5",
        "modeltitle": "some",
        "model": 4,
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Residential Model 5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
       
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },
        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },


        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    /* model 6 */
  {
        "name":"Commercial Model 1",
        "model": 4,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Commercial Model 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
       
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },
        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },


        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    /* model 7 */
    {
        "name":"Commercial Model 2",
        "model": 2,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Commercial Model 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
       
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },
        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },


        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    //industrial model 1
    {
        "name":"Industrial Model 1",
        "model": 1,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Industrial Model 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },

    //industrial model 2
    {
        "name":"Industrial Model 2",
        "model": 2,
        "modeltitle": "some",
        "description2":"<table><caption>Regression Results</caption><tr><th colspan='11'>Estimated Market Value of Land for 1,000 square foot of land - Model summary</th></tr><tr><th>Model</th><th>R<th>r-square</th><th>Adjusted R Squared</th><th>Std Error of the Estimate</th><th>R Square Change</th><th>F Change</th><th>df1</th><th>df2</th><th>Sig. F Change</th><th>Durbin Watson</th></tr><tr><td>4</td><td>0.9</td><td>0.81</td><td>0.80</td><td>4,393</td><td>0.43</td><td>375</td><td>5</td><td>2,541</td><td>0.00</td><td>0.71</td></tr><tr><th colspan='11'><u>note regarding the model.</th></tr></table>",
        "description": "<p>Industrial Model 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>",
        "constant": {
            "b": 34941.40,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "driveTime": {
            "b": -1332.24,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "age": {
            "b": -379.25,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },



        "colonial": {
            "b": 858.1,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "rambler": {
            "b": 836.90,
            "std_error": 378.01,
            "beta": "",
            "t": 65.98,
            "Sig": 0.000,
            "lower_bound": 24200,
            "upper_bound": 25.652,
            "zero_order": "",
            "partial": "",
            "part": "",
            "tolerance": "",
            "vif": ""
        },

        "notes": {
            "a": "un",
            "b": "deux",
            "c": "trois",
            "d": "quatre",
            "e": "cinq"
        },
        "r": 0.652,
        "r-square": 0.43,
        "adjusted_r_squared": 0.42,
        "std_error_of_the_estimate": 4393.38,
        "r_square_change": 0.43,
        "f_change": 375.17,
        "df1": 5,
        "df2": 2.531,
        "sig_f_change": 0.00,
        "durbin_watson": 0.71,
        "modelsummarynotes": {
            "a": "dix",
            "b": "vingt",
            "description": "some text"
        }
    },
]