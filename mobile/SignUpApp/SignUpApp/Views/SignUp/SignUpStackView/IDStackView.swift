//
//  IDStackView.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class IDStackView: SignUpStackView {
    
    private let IDAlertlabel = SignUpAlertLabel(wrongMessage: "잘못된 아이디 형식입니다.", correctMessage: "사용가능한 아이디입니다.")
    
    override func configure() {
        self.alertLabel = IDAlertlabel
        guard let alertLabel = alertLabel else { return }
        addArrangedSubview(alertLabel)
    }
}
