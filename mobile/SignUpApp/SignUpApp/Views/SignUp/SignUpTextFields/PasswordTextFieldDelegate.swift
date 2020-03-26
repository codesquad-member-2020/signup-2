//
//  PasswordTextFieldDelegate.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/26.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PasswordTextFieldDelegate: NSObject, UITextFieldDelegate {
    
    var handleTextChanged: ((String) -> Void)?
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let estimatedText = textField.text ?? ""
        handleTextChanged?(estimatedText)
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
//        print("END", textField.text)
    }
}
